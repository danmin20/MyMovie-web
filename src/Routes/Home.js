import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { BOX_WEEK } from "../queries";
import Helmet from "react-helmet";
import Loader from "../Components/Loader";
import { getDate } from "../getDate";
import BoxofficeDetail from "../Components/BoxofficeDetail";
import FadeIn from "react-fade-in";
import MoreDetail from "../Components/MoreDetail";

const Wrapper = styled.div`
  margin-top: 70px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoxOffice = styled.div`
  background-color: gray;
  width: 100%;
  padding: 30px;
  font-size: 40px;
  font-weight: 100;
  color: white;
`;
const Main = styled.div`
  margin-left: 50px;
`;
const Field = styled.div`
  padding: 30px;
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  flex: 1;
`;
const Movies = styled.div`
  font-size: 13px;
  flex: 0.6;
`;
const Movie = styled.div`
  padding: 10px;
  color: white;
`;
const Detailed = styled.div`
  flex: 0.4;
  font-size: 25px;
  padding: 30px;
`;
const Pointed = styled.div`
  display: flex;
  flex-direction: row;
`;
const Big = styled.div`
  font-size: 30px;
`;
const Small = styled.div`
  font-size: 15px;
  color: #adadad;
`;

export default () => {
  const date = new Date();
  const yesterday = getDate(date);
  const { data, loading } = useQuery(BOX_WEEK, {
    variables: {
      date: yesterday,
      week: "0"
    }
  });
  const [isShown, setIsShown] = useState(false);
  const [shown_0, setShown_0] = useState(false);
  const [shown_1, setShown_1] = useState(false);
  const [shown_2, setShown_2] = useState(false);
  const [shown_3, setShown_3] = useState(false);
  const [shown_4, setShown_4] = useState(false);
  const [shown_5, setShown_5] = useState(false);
  const [shown_6, setShown_6] = useState(false);
  const [shown_7, setShown_7] = useState(false);
  const [shown_8, setShown_8] = useState(false);
  const [shown_9, setShown_9] = useState(false);
  const onEnter = () => {
    setIsShown(true);
  };
  const onLeave = () => {
    setIsShown(false);
  };
  const enter_0 = () => {
    setShown_0(true);
  };
  const leave_0 = () => {
    setShown_0(false);
  };
  const enter_1 = () => {
    setShown_1(true);
  };
  const leave_1 = () => {
    setShown_1(false);
  };
  const enter_2 = () => {
    setShown_2(true);
  };
  const leave_2 = () => {
    setShown_2(false);
  };
  const enter_3 = () => {
    setShown_3(true);
  };
  const leave_3 = () => {
    setShown_3(false);
  };
  const enter_4 = () => {
    setShown_4(true);
  };
  const leave_4 = () => {
    setShown_4(false);
  };
  const enter_5 = () => {
    setShown_5(true);
  };
  const leave_5 = () => {
    setShown_5(false);
  };
  const enter_6 = () => {
    setShown_6(true);
  };
  const leave_6 = () => {
    setShown_6(false);
  };
  const enter_7 = () => {
    setShown_7(true);
  };
  const leave_7 = () => {
    setShown_7(false);
  };
  const enter_8 = () => {
    setShown_8(true);
  };
  const leave_8 = () => {
    setShown_8(false);
  };
  const enter_9 = () => {
    setShown_9(true);
  };
  const leave_9 = () => {
    setShown_9(false);
  };
  return (
    <Wrapper>
      <Helmet>
        <title>Home | MyMovie</title>
      </Helmet>
      {loading && <Loader />}
      {!loading && (
        <BoxOffice onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <Main>BOXOFFICE of This Week</Main>
          {isShown && (
            <Field>
              <Movies>
                <FadeIn>
                  <Movie onMouseEnter={enter_0} onMouseLeave={leave_0}>
                    {shown_0 ? (
                      <Pointed>
                        <Big>{data.boxofficeWeek[0].movieNm}</Big>
                        <div style={{ cursor: "pointer" }}>
                          <MoreDetail data={data.boxofficeWeek[0]} />
                        </div>
                      </Pointed>
                    ) : (
                      <Small>{data.boxofficeWeek[0].movieNm}</Small>
                    )}
                  </Movie>
                  <Movie onMouseEnter={enter_1} onMouseLeave={leave_1}>
                    {shown_1 ? (
                      <Pointed>
                        <Big>{data.boxofficeWeek[1].movieNm}</Big>
                        <div style={{ cursor: "pointer" }}>
                          <MoreDetail data={data.boxofficeWeek[1]} />
                        </div>
                      </Pointed>
                    ) : (
                      <Small>{data.boxofficeWeek[1].movieNm}</Small>
                    )}
                  </Movie>
                  <Movie onMouseEnter={enter_2} onMouseLeave={leave_2}>
                    {shown_2 ? (
                      <Pointed>
                        <Big>{data.boxofficeWeek[2].movieNm}</Big>
                        <div style={{ cursor: "pointer" }}>
                          <MoreDetail data={data.boxofficeWeek[2]} />
                        </div>
                      </Pointed>
                    ) : (
                      <Small>{data.boxofficeWeek[2].movieNm}</Small>
                    )}
                  </Movie>
                  <Movie onMouseEnter={enter_3} onMouseLeave={leave_3}>
                    {shown_3 ? (
                      <Pointed>
                        <Big>{data.boxofficeWeek[3].movieNm}</Big>
                        <div style={{ cursor: "pointer" }}>
                          <MoreDetail data={data.boxofficeWeek[3]} />
                        </div>
                      </Pointed>
                    ) : (
                      <Small>{data.boxofficeWeek[3].movieNm}</Small>
                    )}
                  </Movie>
                  <Movie onMouseEnter={enter_4} onMouseLeave={leave_4}>
                    {shown_4 ? (
                      <Pointed>
                        <Big>{data.boxofficeWeek[4].movieNm}</Big>
                        <div style={{ cursor: "pointer" }}>
                          <MoreDetail data={data.boxofficeWeek[4]} />
                        </div>
                      </Pointed>
                    ) : (
                      <Small>{data.boxofficeWeek[4].movieNm}</Small>
                    )}
                  </Movie>
                  <Movie onMouseEnter={enter_5} onMouseLeave={leave_5}>
                    {shown_5 ? (
                      <Pointed>
                        <Big>{data.boxofficeWeek[5].movieNm}</Big>
                        <div style={{ cursor: "pointer" }}>
                          <MoreDetail data={data.boxofficeWeek[5]} />
                        </div>
                      </Pointed>
                    ) : (
                      <Small>{data.boxofficeWeek[5].movieNm}</Small>
                    )}
                  </Movie>
                  <Movie onMouseEnter={enter_6} onMouseLeave={leave_6}>
                    {shown_6 ? (
                      <Pointed>
                        <Big>{data.boxofficeWeek[6].movieNm}</Big>
                        <div style={{ cursor: "pointer" }}>
                          <MoreDetail data={data.boxofficeWeek[6]} />
                        </div>
                      </Pointed>
                    ) : (
                      <Small>{data.boxofficeWeek[6].movieNm}</Small>
                    )}
                  </Movie>
                  <Movie onMouseEnter={enter_7} onMouseLeave={leave_7}>
                    {shown_7 ? (
                      <Pointed>
                        <Big>{data.boxofficeWeek[7].movieNm}</Big>
                        <div style={{ cursor: "pointer" }}>
                          <MoreDetail data={data.boxofficeWeek[7]} />
                        </div>
                      </Pointed>
                    ) : (
                      <Small>{data.boxofficeWeek[7].movieNm}</Small>
                    )}
                  </Movie>
                  <Movie onMouseEnter={enter_8} onMouseLeave={leave_8}>
                    {shown_8 ? (
                      <Pointed>
                        <Big>{data.boxofficeWeek[8].movieNm}</Big>
                        <div style={{ cursor: "pointer" }}>
                          <MoreDetail data={data.boxofficeWeek[8]} />
                        </div>
                      </Pointed>
                    ) : (
                      <Small>{data.boxofficeWeek[8].movieNm}</Small>
                    )}
                  </Movie>
                  <Movie onMouseEnter={enter_9} onMouseLeave={leave_9}>
                    {shown_9 ? (
                      <Pointed>
                        <Big>{data.boxofficeWeek[9].movieNm}</Big>
                        <div style={{ cursor: "pointer" }}>
                          <MoreDetail data={data.boxofficeWeek[9]} />
                        </div>
                      </Pointed>
                    ) : (
                      <Small>{data.boxofficeWeek[9].movieNm}</Small>
                    )}
                  </Movie>
                </FadeIn>
              </Movies>
              <Detailed>
                {shown_0 && (
                  <BoxofficeDetail code={data.boxofficeWeek[0].movieCd} />
                )}
                {shown_1 && (
                  <BoxofficeDetail code={data.boxofficeWeek[1].movieCd} />
                )}
                {shown_2 && (
                  <BoxofficeDetail code={data.boxofficeWeek[2].movieCd} />
                )}
                {shown_3 && (
                  <BoxofficeDetail code={data.boxofficeWeek[3].movieCd} />
                )}
                {shown_4 && (
                  <BoxofficeDetail code={data.boxofficeWeek[4].movieCd} />
                )}
                {shown_5 && (
                  <BoxofficeDetail code={data.boxofficeWeek[5].movieCd} />
                )}
                {shown_6 && (
                  <BoxofficeDetail code={data.boxofficeWeek[6].movieCd} />
                )}
                {shown_7 && (
                  <BoxofficeDetail code={data.boxofficeWeek[7].movieCd} />
                )}
                {shown_8 && (
                  <BoxofficeDetail code={data.boxofficeWeek[8].movieCd} />
                )}
                {shown_9 && (
                  <BoxofficeDetail code={data.boxofficeWeek[9].movieCd} />
                )}
              </Detailed>
            </Field>
          )}
        </BoxOffice>
      )}
    </Wrapper>
  );
};
