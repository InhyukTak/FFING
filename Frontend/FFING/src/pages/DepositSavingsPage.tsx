import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LinkHeader from "../components/Common/LinkHeader";
import useViewportStore from "../store/useViewportStore";
import NavBar from "../components/Common/Navbar";
import DepositSavingCard from "../components/Asset/DepositSavingCard";
import { getDepositSaving, getAccount } from '../api/AssetApi';

const DepositSavingsPage: React.FC = () => {
  const dvw = useViewportStore((state) => state.dvw);
  const dvh = useViewportStore((state) => state.dvh);
  const [ financialProducts, setFinancialProducts ] = useState([]) // 보유 예금적금 자산 관리

  const type = useLocation().state as { title: string }; // useNavigate를 통해 가져온 데이터를 사용

  // 이번 달 지출액을 가져오는 함수
  const fetchData = async (type: string) => {
    try {
      if (type === '예금/적금') {
        // 실제 사용자 이름으로 진행
        const response = await getDepositSaving('1');
        setFinancialProducts(response.data.result)
      } else if (type === '입출금 통장') {
        const response = await getAccount('1');
        setFinancialProducts(response.data.result)
      }
    } catch (error) {
      console.error('Error fetching certain spending data:', error);
    }
  };

  useEffect(() => {
    fetchData(type.title);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="w-screen h-screen">
        <header style={{ height: `${dvh * 10}px` }}>
          <LinkHeader contentName="예금, 적금" contentRoute="/asset" />
        </header>
        <main
          className="mx-auto"
          style={{ height: `${dvh * 80}px`, width: `${dvw * 90}px` }}
        >
          {/* 예적금 상품을 보여주는 카드 */}
          {financialProducts.length > 0 ? (
            financialProducts.map((product, index) => (
              <DepositSavingCard key={index} product={product} />
            ))
          ) : (
            <p>가입한 상품이 없습니다.</p>
          )}
        </main>
        <footer>
          <NavBar />
        </footer>
      </div>
    </div>
  );
};

export default DepositSavingsPage;