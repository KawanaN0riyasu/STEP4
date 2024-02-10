'use client'
import { useState,useEffect } from 'react';
import TitleBar from './components/TitleBar';
import InputAria from './components/InputAria';
import OutputAria from './components/OutputAria';
import { IDtype } from './type';

// 型定義
// type ProductType = {
//   PRD_ID: string;
// };

export default function Home() {
  const [productid, setProductid] = useState< IDtype | null >(null);  //型が IDtype か null で、初期値がnull。
  const message = "welcome";

  const handleProductChange = (newProductId: string) => {
    const newProduct: IDtype  = {
      PRD_ID: newProductId 
    };
    setProductid(newProduct);
  };
  // newProductId を受け取って新しい IDtype オブジェクト「newProduct」 を作成、setProductid を使って productid を更新する。

  return (
    <>
    <TitleBar/>
    <div className="flex justify-center items-center my-10">
      <h1 className="text-4xl font-bold">{message}</h1>
    </div>
    <InputAria onProductChange={handleProductChange}/>
    <OutputAria productid={productid}/>
    </>
  );
}