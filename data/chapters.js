/*
  網站目錄資料：新增或上線一個單元時，只要修改這個檔案。
  - ready: true  → 首頁與冊別目錄會顯示可點選的卡片
  - ready: false → 顯示「準備中」
  - path 是相對於網站根目錄的資料夾（結尾要有 /）
  單元編號依龍騰版教科書；之後新增單元時加在 chapters 陣列裡。
*/
window.SITE = {
  title: '高中數學互動教學網',
  books: [
    {
      id: 'book3',
      title: '第三冊',
      grade: '十一年級上學期（龍騰版）',
      path: 'book3/',
      chapters: [
        { no: '單元五', title: '指數函數', path: 'book3/unit5/', ready: true,
          desc: '指數的推廣、指數函數的圖形與性質、指數方程式與不等式、指數模型；含心智圖與 57 張學習卡', cover: 'book3/unit5/assets/cover.jpg' },
        { no: '單元六', title: '對數與對數律', path: 'book3/unit6/', ready: true,
          desc: '對數的意義、對數律與換底公式、常用對數、對數的應用；含心智圖與 66 張學習卡', cover: 'book3/unit6/assets/cover.jpg' },
        { no: '單元七', title: '對數函數', path: 'book3/unit7/', ready: true,
          desc: '對數函數的定義與圖形、與指數函數的關係與圖形變換、性質與大小比較、對數不等式與圖形的應用；含心智圖與 56 張學習卡', cover: 'book3/unit7/assets/cover.jpg' }
      ]
    }
  ]
};
