import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BetaForm from "./BetaForm";

vi.mock("@/lib/supabase", () => ({
  supabase: {
    from: vi.fn(),
  },
}));

import { supabase } from "@/lib/supabase";

const mockInsert = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
  (supabase.from as ReturnType<typeof vi.fn>).mockReturnValue({
    insert: mockInsert,
  });
});

describe("BetaForm", () => {
  it("5개 필드를 모두 렌더링한다", () => {
    render(<BetaForm />);
    expect(screen.getByLabelText(/담당자 이름/)).toBeInTheDocument();
    expect(screen.getByLabelText(/이메일/)).toBeInTheDocument();
    expect(screen.getByLabelText(/레스토랑 이름/)).toBeInTheDocument();
    expect(screen.getByLabelText(/전화번호/)).toBeInTheDocument();
    expect(screen.getByLabelText(/비지니스 주소/)).toBeInTheDocument();
  });

  it("Supabase insert 성공 시 완료 메시지를 표시한다", async () => {
    mockInsert.mockResolvedValueOnce({ error: null });
    const user = userEvent.setup();

    render(<BetaForm />);

    await user.type(screen.getByLabelText(/담당자 이름/), "홍길동");
    await user.type(screen.getByLabelText(/이메일/), "test@example.com");
    await user.type(screen.getByLabelText(/레스토랑 이름/), "미도리 테리야끼");
    await user.type(screen.getByLabelText(/전화번호/), "5551234567");
    await user.type(screen.getByLabelText(/비지니스 주소/), "123 Main St");
    await user.click(screen.getByRole("button", { name: /베타 신청하기/ }));

    await waitFor(() => {
      expect(screen.getByText(/신청 완료! 빠른 시일/)).toBeInTheDocument();
    });
    expect(mockInsert).toHaveBeenCalledWith({
      email: "test@example.com",
      contact_name: "홍길동",
      restaurant_name: "미도리 테리야끼",
      restaurant_address: "123 Main St",
      phone: "5551234567",
    });
  });

  it("Supabase insert 실패 시 오류 메시지를 표시한다", async () => {
    mockInsert.mockResolvedValueOnce({
      error: { message: "Database error" },
    });
    const user = userEvent.setup();

    render(<BetaForm />);

    await user.type(screen.getByLabelText(/담당자 이름/), "홍길동");
    await user.type(screen.getByLabelText(/이메일/), "test@example.com");
    await user.type(screen.getByLabelText(/레스토랑 이름/), "미도리");
    await user.type(screen.getByLabelText(/전화번호/), "5551234567");
    await user.type(screen.getByLabelText(/비지니스 주소/), "123 Main St");
    await user.click(screen.getByRole("button", { name: /베타 신청하기/ }));

    await waitFor(() => {
      expect(screen.getByText(/오류가 발생했습니다/)).toBeInTheDocument();
    });
  });

  it("필수 필드가 비어있으면 submit이 방지된다", async () => {
    mockInsert.mockResolvedValueOnce({ error: null });
    const user = userEvent.setup();

    render(<BetaForm />);
    await user.click(screen.getByRole("button", { name: /베타 신청하기/ }));

    expect(mockInsert).not.toHaveBeenCalled();
  });
});
