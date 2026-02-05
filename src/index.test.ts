import { sum } from "./index";

test("1 + 2는 3이어야 합니다", () => {
  expect(sum(1, 2)).toBe(5);
  // 테스트 실패 코드로 수정
  // expect(sum(1, 2)).toBe(5);
});
