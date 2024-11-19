# 離職集點卡 Resignation Stamp Card

![stamp-card](https://github.com/user-attachments/assets/048d9543-7d5a-40d4-b9dc-f3863893fdef)  

- Inspired by [this post](https://www.threads.net/@qqian___/post/C_NWmddyP7z) in Threads.
- With the help of (aka 99% completed by) [Claude](https://claude.ai/).  

## Instructions

- Clone the repo or download the code as ZIP ｜ 下載程式碼
- Unzip if needed, in terminal `cd` to the code folder and run following cmd ｜ 在 terminal 進入程式碼 folder 並執行以下指令
  ```bash
  sudo npm intall
  sudo npm start
  ```
- You should see message ｜ 應該會看到訊息 `Server running at http://localhost:3000`
- Open browser and go to `http://localhost:3000` ｜ 在瀏覽器打開 `http://localhost:3000`
- Start collecting stamps! ｜ 不爽就集點！

## Data
- Data persists in `resignation_data.json` in the same folder even if process is terminated
- The json file is created automatically if not exist
- 會自動生成 `resignation_data.json` 並儲存在同一 folder 中，重啟 server 應該會看到先前收集的點數

