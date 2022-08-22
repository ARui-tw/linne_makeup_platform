<template>
  <div class="my-20 ml-4 mr-7">
    <div class="mb-10 text-2xl font-bold">
      【大數據應用於建構彩妝審美基準之研究】<br />
      A Study of AI Aesthetic Benchmark for Makeup Applications
    </div>
    <div>
      人工智慧，是現今各種領域中，最炙手可熱的技術。「美」也是重要領域，卻鮮少有研究單位做為研究標地。本研究以彩妝為標地，藉這個研究將人工智慧，帶入具有廣大市場的彩妝世界，讓電腦更具人性。美學領域中目前缺少有變動性且客觀的評量標準，本研究讓彩妝的評鑑有更獨到的效益。
      <br />
      <br />
      Artificial Intelligence is one of the trendiest technologies in current
      times. Beauty, also an important area of interest, has not drawn as much
      attention from academic researchers. This research is intended to bring
      artificial intelligence into the global facial make-up market, and to
      bring more humanity to computing. The norms in beauty, and in this case
      facial make-up, can be uncovered and presented in more objective ways.
      This research intends to explore these norms and apply them in the
      marketability of beauty industry.
      <br />
      <br />
      最初，我們選擇 Inception v3 CNN 模型作為系統的model進行訓練。 為了確保
      Inception v3
      能夠更有效地學習,我們減少image間的變化性所帶來的影響，如眼鏡,刺青,傷疤等等,我們利用區域卷積神經網絡
      (RCNN)和我們所設計filter來篩選掉不符合標準的image。 表 1
      我們比較了一般cnn以及我們所訓練的cnn ,我們所提出的系統能夠達到 94%
      的準確率。
      <br />
      <br />
      Initially, we chose the Inception v3 CNN model as the basis for the
      system. To reduce the impact of the high intra-variability of the face
      image and ensure that the Inception v3 is able to learn more effectively,
      we utilized Region Convolution Neural Network (RCNN) and filter to select
      images which are unstandardized. Table 1 shows that the accuracy of our
      system based on the BeautyGAN is about 45.87% better compared to the
      conventional method. By utilizing the BeautyGAN dataset, the proposed
      system is able to achieve an accuracy of 94%.
      <br />
      <br />
      為建構屬於台灣人的資料庫，實驗室做了田野調查。在這疫情的環境下，使用綿密的電訪。在教育部所屬大專院校中有參拾所學校有彩妝相關科系，其中10所是在護理學系所中。目前採訪了十一所學校和十五位教師，每位採訪時間為一小時至兩小時。重要訊息是:全球化妝產業市值和半導體產業差不多大，政府可以更注意這個產業。
      <br />
      <br />
      Our studio conducted field surveys in order to build up database in
      Taiwan. In the context of Covid, we conducted telephone interviews. There
      are thirty schools with make-up departments recognized by the Ministry of
      Education in Taiwan, We have interviewed fifteen teachers from eleven
      schools. The duration of each interview is between one and two hours. One
      of the most important conclusions is this: the size of global make-up
      industry is similar to the size of the semi-conductor industry. We urge
      our government to pay more attention to this industry.
      <br />
      <br />
      教育部所屬美容彩妝之高教技術學校，36所學校中只有2所是國立技術學院。其他都是私立學校。彩妝產業需求雖然上升，但少子化影響學校減量。當若干高校走入歷史，會衝擊到彩妝美容業的發展。伙伴學校希望藉清大彩妝研究能帶來新的變革。
      <br />
      <br />
      Two out of the thirty-six schools are public funded. The demands in the
      make-up market is increasing, but the number of schools is decreasing due
      to low birth rates over the years. This certainly will impact the make-up
      and beauty industry. Some fellow schools are hoping this research
      conducted by Tsinghua University will bring changes around to this
      situation.
      <br />
      <br />
      伙伴學校特別籲請清大設置吸引學生的網頁，讓擅長畫妝的同學自行上傳。教師們會願意協助推廣蒐集影像資料。即便「美感是主觀的判斷」貌似真理，搭配美容科老師大量的專業主觀審查，應該可以「客觀」地測到一定程度準確度，以教學輔助為目標，是實用的技術。
      <br />
      <br />
      The fellow schools requested that web platforms be constructed by Tsinghua
      University to attract students, and to encourage students with make-up
      skills to upload images useful for our study. Teachers from the schools
      offered to help with collection of image database. We believe “beauty”,
      which is commonly believed to be a subjective set of standards, can be
      translated into attributable traits, which would be considered objective
      to some extent, and applied in modern technology.
      <br />
      <br />
      目前多數專業教師建議要跳脫國家考試為量測指標，避免考核模式成為限制。僵化是美學中很大的框架。動態標準顯然是AI技術具有的優勢。找出動態的客觀標準，將會是在美感工程上，尤其是彩妝評量有所貢獻。清華大學的研究夥伴學校協助蒐羅研究過程需要大量的影像，藉由這契機，將資源共享與美容相關技術學校，實測的過程中，提升該產業從業人員學術量能。啟動團隊整體運作，並延伸整體研究計劃的深度及廣度。以高校研究量能帶領技職院校專業技術的提升。
      <br />
      <br />
      Professional teachers in the beauty industry advised us to free ourselves
      from the national examination standards. These standards limit our
      understanding of beauty norms. Dynamic Standard is one advantage with A.
      I. Finding these dynamic objective standards will help the development of
      make-up engineering, and especially make-up critiquing. We need massive
      volume of image samples for this study. We intend to take this opportunity
      to share academic resources with the related schools, and with the
      industry, in order to engage the industry in the research, to broaden and
      deepen the study. In return, the academia should refresh the techniques
      and bring about technological upgrades.
    </div>
    <div class="mt-3 flex justify-end">
      <router-link to="/home" class="bg-gray-50 px-4 py-2 text-lg">
        返回
      </router-link>
    </div>
  </div>
</template>
