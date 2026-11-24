# 高中數學互動教學網

高中數學（龍騰版）各冊、各單元的互動教學網頁：NotebookLM 簡報輪播、互動視覺化、隨堂評量、資訊圖表，以及抽籤、計時器、畫筆等課堂工具。

網站網址：https://brianyeh0718-hue.github.io/senior-high-math/

## 資料夾結構

```
senior-high-math/
├─ index.html          網站首頁（自動列出所有冊別與單元）
├─ data/
│   ├─ chapters.js     ★ 目錄資料：新增或上線單元只要改這裡
│   ├─ render.js       依 chapters.js 產生單元卡片
│   └─ site.css        首頁、冊別目錄共用樣式
└─ book3/              第三冊
    ├─ index.html      第三冊目錄
    └─ unit5/          單元五 指數函數
        ├─ index.html
        └─ assets/     簡報圖、資訊圖表（JPG）
```

網址規則：`…/senior-high-math/book{冊}/unit{單元}/`，例如第三冊單元五是 `/book3/unit5/`。

## 新增一個單元

1. 在本機的備課資料夾完成該單元的 `05_教學網頁`。
2. 把 `05_教學網頁` 裡的所有檔案複製到 `book3/unitN/`（N 為單元編號）。
3. 確認單元網頁導覽列最前面有回到冊別目錄的連結：`<a href="../"><b>⌂</b>第三冊</a>`。
4. 打開 `data/chapters.js`，在該冊的 `chapters` 加一筆（`no`、`title`、`path`、`ready: true`、`desc`、`cover`）。
5. 提交並推送到 GitHub，約 1～2 分鐘後網站就會更新。

## 新增一冊

在 `data/chapters.js` 的 `books` 裡新增一冊（`id`、`title`、`grade`、`path`、`chapters`），
再複製 `book3/index.html` 成 `bookN/index.html`，把最後一行的 `'book3'` 和標題改成新的冊別。

## 注意事項

- 本倉庫為公開倉庫，請勿放入學生個資、成績或有版權疑慮的課本內容。
- 影片請放 YouTube 再嵌入網頁，不要把 mp4 放進倉庫（單檔網頁上傳上限 25 MB、Git 上限 100 MB，倉庫建議 1 GB 以內）。
- 圖片請用 JPG（簡報 1920×1080），每張約 0.3～0.5 MB。
- 「補充影片」區塊貼上的網址只存在使用者自己的瀏覽器；要讓所有人看到的影片，請直接寫進網頁。
