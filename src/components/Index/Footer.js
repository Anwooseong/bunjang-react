import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer_menu_container']}>
        <div className={styles['footer_menu']}>
          <a
            href="https://bgzt.co.kr/"
            target="_blank"
            className={styles['menu_item']}
            rel="noreferrer"
          >
            회사소개
          </a>
          <a
            href="https://terms.bunjang.co.kr/terms/service.html"
            target="_blank"
            rel="noreferrer"
            className={styles['menu_item']}
          >
            이용약관
          </a>
          <a
            href="https://terms.bunjang.co.kr/terms/service-policy.html"
            target="_blank"
            rel="noreferrer"
            className={styles['menu_item']}
          >
            운영정책
          </a>
          <a
            href="https://terms.bunjang.co.kr/terms/privacy.html"
            target="_blank"
            rel="noreferrer"
            className={styles['menu_item']}
          >
            <b>개인정보처리방침</b>
          </a>
          <a
            href="https://terms.bunjang.co.kr/terms/youth-policy.html"
            target="_blank"
            rel="noreferrer"
            className={styles['menu_item']}
          >
            청소년보호정책
          </a>
          <a
            href="https://ads-partner.bunjang.co.kr"
            target="_blank"
            rel="noreferrer"
            className={styles['menu_item']}
          >
            광고제휴
          </a>
        </div>
      </div>
      <div className="sc-eTuwsz cJrJVo">
        <div className={styles['footer_top_container']}>
          <div className={styles['left_container']}>
            <div className={styles['fisrt_container']}>
              <div className={styles['bungae_info']}>번개장터(주) 사업자정보</div>
              <div className="sc-hZSUBg bWusqD">
                대표이사 : 최재화,
                강승현&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;개인정보보호책임자 :
                박병성
                <br />
                사업자등록번호 :
                113-86-45836&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;통신판매업신고
                : 2019-서울서초-1126
                <br />
                호스팅서비스 제공자 : Amazon Web Services (AWS)
                <br />
                EMAIL :
                help@bunjang.co.kr&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;FAX :
                02-598-8241
                <br />
                주소 : 서울특별시 서초구 서초대로 38길 12, 7, 10층(서초동,
                마제스타시티, 힐스테이트 서리풀)
                <br />
                <a
                  href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1138645836"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  사업자정보 확인
                </a>
              </div>
            </div>
            <div className={styles['second_container']}>
              <div className="sc-hZSUBg bWusqD sc-cMhqgX fhmeEc">
                <div>
                  <span className={styles['place_text']}>번개장터(주)더현대서울점</span>
                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;최재화,
                  강승현&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;365-85-01581
                  <br />
                  서울특별시 영등포구 여의대로 108, 지하2층(여의도동, 파크원)
                </div>
                <div>
                  <span className={styles['place_text']}>번개장터(주)코엑스점</span>
                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;최재화,
                  강승현&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;142-85-27412
                  <br />
                  서울특별시 강남구 영동대로 513, 쇼핑몰동 B1층 C102호(삼성동,
                  코엑스)
                </div>
                <div>
                  <span className={styles['place_text']}>번개장터(주)센터필드점</span>
                  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;최재화,
                  강승현&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;808-85-01905
                  <br />
                  서울특별시 강남구 테헤란로 231, 쇼핑몰동 1층
                  W124호(역삼동)(역삼동, 센터필드)
                </div>
              </div>
            </div>
          </div>
          <div className={styles['third_container']}>
            <div className="sc-iQNlJl jSuVsI">
              <div className="people_center">
                고객센터&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 20"
                  role="img"
                >
                  <path
                    fill="#9b99a9"
                    fillRule="evenodd"
                    d="M1 20a.994.994 0 0 0 .748-.337l8-9a.999.999 0 0 0 0-1.328l-8-9A1 1 0 0 0 .254 1.663L7.664 10l-7.41 8.336A.999.999 0 0 0 1 20"
                  ></path>
                </svg>
              </div>
              <div className="sc-hZSUBg bWusqD">
                <strong className={styles['bigger_text']}>1670-2910</strong>
                <br />
                운영시간 9시 - 18시 (주말/공휴일 휴무, 점심시간 12시 - 13시)
                <br />
                <div className={styles['center_a']}>
                  <a
                    href="https://help.bunjang.co.kr/notice"
                    style={{ textDecoration: "underline", marginRight: "15px" }}
                  >
                    공지사항
                  </a>
                  <a
                    href="https://help.bunjang.co.kr/qna/new"
                    style={{ textDecoration: "underline", marginRight: "15px" }}
                  >
                    1:1 문의하기
                  </a>
                  <a
                    href="https://help.bunjang.co.kr/faq"
                    style={{ textDecoration: "underline", marginRight: "15px" }}
                  >
                    자주 묻는 질문
                  </a>
                </div>
              </div>
            </div>
            <div className="sc-iQNlJl jSuVsI">
              <div className={styles['bank_info']}>우리은행 채무지급보증 안내</div>
              <div className="sc-hZSUBg bWusqD">
                번개장터㈜는 회사가 직접 판매하는 상품에 한하여, 고객님의 현금
                결제 금액에 대해 우리은행과 채무지급보증 계약을 체결하여
                안전거래를 보장하고 있습니다.
                <br />
                <a
                  href="https://terms.bunjang.co.kr/terms/wooriguarantee.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  서비스 가입사실 확인
                </a>
                <div className={styles['rights-copy']}>
                  Ⓒ Bungaejangter. Inc All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['footer_bottom_container']}>
          <div
            className={styles['bottom_left_container']}
            style={{ marginRight: "10px" }}
          >
            <a
              href="https://isms.kisa.or.kr/main/ispims/issue/?certificationMode=list&amp;crtfYear=&amp;searchCondition=2&amp;searchKeyword=%EB%B2%88%EA%B0%9C%EC%9E%A5%ED%84%B0+%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC&amp;__encrypted=U8oaEwTLg12yqNDZuCwRPMiDRLgcrZjlbxomU5uctoZc1kXWONBhXaf0KhG%2BaV6wpp2zSeTry6yKT1QpQPP4n6Wl4JbzPyTKSn7s1FoRr90UnnwTp%2BW928V1TpyMuwFVMU8D270RkIg564CRAF0bUnkvpnfyAxjhbyn0pSpjvw%2BMlXuoQnR3oJUfvVi%2B1dac8Gnd7jHhSmiDLOX09CuWhVRPx40RuMcaT%2FHbItyyZvQECWvcAvRb36C1zB%2FnwnWRJNfv74iaCKBgpNE%2BERnypNyBfcqQSKf%2BfDsW9aHcpTOO1K747YgBrg%3D%3D"
              target="_blank"
              rel="noreferrer"
              className={styles['bottom_left_container']}
            >
              <img
                src="https://m.bunjang.co.kr/pc-static/resource/ee757469a142ab4f2f48.png"
                width="31"
                height="28"
                alt="ISMS 인증마크"
              />
              <div>
                <p>
                  [인증범위] 번개장터 중고거래 플랫폼 서비스 운영(심사받지 않은
                  물리적 인프라 제외)
                </p>
                <p>[유효기간] 2021.05.18 ~ 2024.05.17</p>
              </div>
            </a>
          </div>
          <div className="sc-epnACN KrYIY">
            <div className="sc-esOvli bBCboT">
              번개장터㈜는 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
              전자상거래 등에서의 소비자보호에 관한 법률 등 관련 법령 및
              번개장터㈜의 약관에 따라 상품, 상품정보, 거래에 관한 책임은 개별
              판매자에게 귀속하고, 번개장터㈜는 원칙적으로 회원간 거래에 대하여
              책임을 지지 않습니다. 다만, 번개장터㈜가 직접 판매하는 상품에 대한
              책임은 번개장터㈜에게 귀속합니다.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
