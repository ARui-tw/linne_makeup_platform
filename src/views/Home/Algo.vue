<template>
  <div class="my-20 ml-4 mr-7">
    <div class="mb-10 text-2xl font-bold">關於選擇的演算法</div>
    <div>
      其實我們並不知道怎麼樣選擇會比較接近人類的大腦判斷，怎麼辦呢?以科學的方式就是不斷的嘗試，比方說:一張照片請一位專家評分，就是一個很直觀的做法，但是類神經網路是以電腦（軟體或硬體）來模擬大腦神經的人工智慧系統，需要大量的訊息才能幫助它分析。那麼如何招募兩三萬個人提供照片，並且還要有標註。畢竟電腦無法知道好看或不好看這件事。所以資訊的蒐集就會是很重要的研究前提。
      我們想過一些不同的方式，從一次看一張照片並請標註這固定分數，很快地就發現同一位老師，打分數到25張照片左右就會疲憊了，意思就是老師也會隨便打分數。於是我們又想出另外一個方法，一次比兩張照片，一來有比大小的概念，二來就能保持某種客觀，畢竟一次會有兩張比較。接下來又有一個新的想法，就是相對分數，一次六張照片，讓老師們直覺得從最喜歡的開始按，這樣會有六個相對分數。於是我們資工的學長就要一直不斷的找新的模型，並且測試準確度。不過顯然最重要的兩件事，就是徵求合法的照片，並且有專業素養的教授。簡單來說，我們是訓練電腦，學習老師們的品味和美感。讓老師們的功力灌注到系統之中。
    </div>
    <div class="mt-3 flex justify-end">
      <router-link to="/home" class="bg-gray-50 px-4 py-2 text-lg">
        返回
      </router-link>
    </div>
  </div>
</template>
