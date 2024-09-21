import React, { useState, useEffect } from 'react';

// 임의의 공격 데이터를 설정합니다.
const mockOpponentAttack = {
  name: '쇼핑',
  damage: Math.floor(Math.random() * 10) + 1,
};

interface AttackResultProps {
  selectedAttack: {
    name: string;
    damage: number;
  };
}

const AttackResult: React.FC<AttackResultProps> = ({ selectedAttack }) => {
  const [opponentAttack, setOpponentAttack] = useState<{
    name: string;
    damage: number;
  } | null>(null);

  useEffect(() => {
    // WebSocket 구독을 통해 상대방의 공격 데이터를 받아오는 로직이 들어갈 부분입니다.
    // 현재는 임의로 데이터를 설정합니다.
    setTimeout(() => {
      // 상대방이 공격을 선택한 경우
      setOpponentAttack(mockOpponentAttack);
    }, 2000);

    // 주석으로 WebSocket 연결 로직 설명
    /*
    useEffect(() => {
      const socket = new WebSocket('ws://your-websocket-url');

      socket.onmessage = (event) => {
        const opponentAttackData = JSON.parse(event.data);
        setOpponentAttack(opponentAttackData);
      };

      return () => {
        socket.close();
      };
    }, []);
    */
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* 내가 선택한 공격 */}
      <div className="w-full max-w-md mx-auto p-4 border-4 border-black rounded-lg bg-[#FAF7E1]">
        <div className="flex justify-between items-center p-2 mb-2">
          <div className="flex items-center">
            <span className="text-lg">{selectedAttack.name}</span>
          </div>
          <span className="text-lg text-gray-700">{selectedAttack.damage}</span>
        </div>
      </div>

      {/* 상대방이 선택한 공격 */}
      <div className="w-full max-w-md mx-auto p-4 border-4 border-black rounded-lg bg-[#EEFFF0] mt-4">
        {opponentAttack ? (
          <div className="flex justify-between items-center p-2 mb-2">
            <div className="flex items-center">
              <span className="text-lg">{opponentAttack.name}</span>
            </div>
            <span className="text-lg text-gray-700">{opponentAttack.damage}</span>
          </div>
        ) : (
          <div className="text-center text-lg">waiting...</div>
        )}
      </div>
    </div>
  );
};

export default AttackResult;
