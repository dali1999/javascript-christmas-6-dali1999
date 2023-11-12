const PromptMessage = {
  ENTER_VISIT_DATE:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  ENTER_ORDER:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
  PLANNER_OPENING: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  BENEFITS_OPENING(date) {
    return `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`;
  },

  // 목록 타이틀
  ORDER_MENU_TITLE: '<주문 메뉴>',
  TOTAL_BEFORE_DISCOUNT_TITLE: '\n<할인 전 총주문 금액>',
  GIVEAWAY_MENU_TITLE: '\n<증정 메뉴>',
  BENEFIT_DETAIL_TITLE: '\n<혜택 내역>',
  TOTAL_BENEFIT_TITLE: '\n<총혜택 금액>',
  EXPECTED_PAYMENT_TITLE: '\n<할인 후 예상 결제 금액>',
  GRANTED_BADGE_TITLE: '\n<12월 이벤트 배지>',

  // 할인 이벤트
  DDAY_DISCOUNT:'크리스마스 디데이 할인',
  WEEKDAY_DISCOUNT:'평일 할인',
  WEEKEND_DISCOUNT:'주말 할인',
  SPECIAL_DISCOUNT:'특별 할인',
  GIVEAWAY_EVENT_DISCOUNT:'증정 이벤트',

  GIVEAWAY_MESSAGE: '샴페인 1개',
  NULL_MESSAGE: '없음',
};

export default PromptMessage;
