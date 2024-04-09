// 주택관리번호, 공고번호, 주택구분, 모집공고일 값을 이용하여 오피스텔/도시형/민간임대/생활숙박시설 분양정보의 상세정보를 제공
export type UrbtyOfctlLttotPblancDetail = {
  currentCount: number
  data: UrbtyOfctlLttotPblancDetailData[]
  matchCount: number
  page: number
  perPage: number
  totalCount: number
}

export type UrbtyOfctlLttotPblancDetailData = {
  BSNS_MBY_NM: string // 사업주체명 (시행사)
  CNTRCT_CNCLS_BGNDE: string // 계약 시작일
  CNTRCT_CNCLS_ENDDE: string // 계약 종료일
  HMPG_ADRES: string // 홈페이지 주소
  HOUSE_DTL_SECD: string // 주택상세코드
  HOUSE_DTL_SECD_NM: string // 주택상세구분코드명
  HOUSE_MANAGE_NO: string // 주택관리번호
  HOUSE_NM: string // 주택명
  HOUSE_SECD: string // 주택구분코드
  HOUSE_SECD_NM: string // 주택 구분 코드 (도시형, 오피스텔, 민간임대)
  HSSPLY_ADRES: string // 공급 위치
  HSSPLY_ZIP: string // 공급 위치 우편번호
  MDHS_TELNO: string // 문의 처
  MVN_PREARNGE_YM: string // 입주 예정일
  PBLANC_NO: string // 공고번호
  PBLANC_URL: string // 분양정보 url
  PRZWNER_PRESNATN_DE: string // 당첨자 발표일
  RCRIT_PBLANC_DE: string // 모집 공고일
  SEARCH_HOUSE_SECD: string // 주택구분
  SUBSCRPT_RCEPT_BGNDE: string // 청약 접수 시작일
  SUBSCRPT_RCEPT_ENDDE: string // 청약 접수 마감일
  TOT_SUPLY_HSHLDCO: number // 공급 규모
}

/**
 *  주택 구분 코드 SEARCH_HOUSE_SECD
 *  도시형생활주택 - 0201, 오피스텔 - 0202, 민간임대 - 0203, 공공지원민간임대 - 0204
 *
 *  주택구분코드 HOUSE_SECD
 *  무순위/잔여세대 - 04, 계약취소주택 - 06
 *
 *  주택상세구분코드 HOUSE_DTL_SECD
 *  도시형 - 01, 오피스텔 - 02, 민간 - 03, 공공지원민간임대 - 04
 */

// 주택관리번호, 공고번호 값을 이용하여 오피스텔/도시형/민간임대/생활숙박시설 분양정보 주택형별 상세정보를 제공
export type UrbtyOfctlLttotPblancMdl = {
  currentCount: number
  data: UrbtyOfctlLttotPblancMdlData[]
  matchCount: number
  page: number
  perPage: number
  totalCount: number
}

export type UrbtyOfctlLttotPblancMdlData = {
  EXCLUSE_AR: string // 전용면적
  GP: string // 군
  HOUSE_MANAGE_NO: string // 주택관리번호
  MODEL_NO: string // 모델번호
  PBLANC_NO: string // 공고번호
  SUBSCRPT_REQST_AMOUNT: string // 청약신청금
  SUPLY_AMOUNT: string // 공급금액(분양최고금액)
  SUPLY_HSHLDCO: number // 공급세대수
  TP: string // 타입
}

// 주택관리번호, 공고번호, 모집공고일 값을 이용하여 공공지원 민간임대 분양정보의 상세정보를 제공
export type PblPvtRentLttotPblancDetail = {
  currentCount: number
  data: PblPvtRentLttotPblancDetailData[]
  matchCount: number
  page: number
  perPage: number
  totalCount: number
}
export type PblPvtRentLttotPblancDetailData = {
  BSNS_MBY_NM: string // 사업 주체명
  CNTRCT_CNCLS_BGNDE: string // 계약시작일
  CNTRCT_CNCLS_ENDDE: string // 계약마감일
  HMPG_ADRES: string // 홈페이지 주소
  HOUSE_DETAIL_SECD: string // 주택상세구분코드
  HOUSE_DETAIL_SECD_NM: string // 주택상세구분코드명
  HOUSE_MANAGE_NO: string // 주택관리번호
  HOUSE_NM: string // 주택명
  HOUSE_SECD: string // 주택구분코드
  HOUSE_SECD_NM: string // 주택구분코드명
  HSSPLY_ADRES: string // 공급위치
  HSSPLY_ZIP: string // 공급위치 우편번호
  MDHS_TELNO: string // 문의처 번호
  MVN_PREARNGE_YM: string // 입주 예정월
  PBLANC_NO: string // 공고번호
  PRZWNER_PRESNATN_DE: string // 당첨자발표일
  RCRIT_PBLANC_DE: string // 모집공고일
  SEARCH_HOUSE_SECD: string // 주택구분
  SUBSCRPT_RCEPT_BGNDE: string // 청약접수시작일
  SUBSCRPT_RCEPT_ENDDE: string // 청약접수마감일
  TOT_SUPLY_HSHLDCO: number // 공급규모
}

// 주택관리번호, 공고번호 값을 이용하여 공공지원 민간임대 분양정보의 주택형별 상세정보를 제공
export type PblPvtRentLttotPblancMdl = {
  currentCount: number
  data: PblPvtRentLttotPblancMdlData[]
  matchCount: number
  page: number
  perPage: number
  totalCount: number
}

export type PblPvtRentLttotPblancMdlData = {
  CNTRCT_AR: string // 계약면적
  EXCLUSE_AR: string // 전용면적
  GNSPLY_HSHLDCO: number // 특별공급 청년 세대수
  GP: string // 군
  HOUSE_MANAGE_NO: string // 주택관리번호
  MODEL_NO: string // 모델번호
  PBLANC_NO: string // 공고번호
  SPSPLY_AGED_HSHLDCO: number // 공급금액
  SPSPLY_NEW_MRRG_HSHLDCO: number // 특별공급 고령자 세대수
  SPSPLY_YGMN_HSHLDCO: number // 특별공급 신혼부부 세대수
  SUBSCRPT_REQST_AMOUNT: string // 청약신청금 (분양최고금액 만원)
  SUPLY_AMOUNT: string // 공급금액 (분양최고금액 만원)
  SUPLY_AR: string // 공급면적
  SUPLY_HSHLDCO: number // 공급세대수
  TP: string // 타입
}