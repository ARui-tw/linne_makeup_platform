<template>
  <div class="my-20 ml-4 mr-7">
    <div class="text-2xl font-bold">關於訓練模型與資料集</div>
    <SizeBox height="10" />
    <div class="mr-5 max-w-4xl">
      [學習模型] MT-ResNet
      <br />
      <br />
      MT-ResNet : A Multi-Task Deep Network for Facial Attractiveness Prediction
      <br />
      <br />
      此篇可以說是確定我這個專題真正框架的開始，並不是在與演算法或是模型架構上，而是在於
      Facial attractiveness prediction (FAP)(也有人叫作 Facial beauty prediction
      (FBP))這概念上，在審美標準上有更加清楚得理解，也是在這篇看到 SCUT-FBP5500
      這個使用 FBP 去分級的資料集，讓我們確立了實驗的基調，當然 MT-ResNet
      這個架構所下，可以在預測 FBP
      同時去判斷性別，兩者都得到不錯的效果，Multi-Task 也對之後 Comboloss
      有一定的影響。
      <br />
      <br />
      <br />
      <br />

      [資料集] SCUT-FBP5500
      <br />
      <br />
      SCUT-FBP5500 : A Diverse Benchmark Dataset for Multi-Paradigm Facial
      Beauty Prediction
      <br />
      <br />
      這篇就詳細介紹了我們現在實驗主要使用的 Dataset，SCUT-FBP5500 現今在 FBP
      預測上時常拿來當成評斷標準的一個
      Dataset，也是我們實驗室想要努力達成的目標。SCUT-FBP5500 是由多個公開
      Dataset 去組合而成的，主要的構成是 2000 張亞洲男性， 2000 張亞洲女性，750
      張高加索男性，750 張高加索女性，再經由 60 個 Rater 以
      1~5分去打分，在實驗中可以明確分成兩類 machine learning 以及 deep
      learning，而依實驗結果而言 deep learning 無疑是比較優越的那種。
    </div>
  </div>
</template>

<script setup>
import SizeBox from "@/components/SizeBox.vue";
</script>
