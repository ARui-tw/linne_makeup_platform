<template>
  <div class="my-20 ml-4 mr-7">
    <div class="text-2xl font-bold">網頁架構製作 ( 上 )</div>
    <SizeBox height="10" />
    <div class="mr-5 max-w-4xl">
      對於學習模型來說，訓練的資料對訓練結果有充足的影響，而訓練資料的來源與蒐集方法便顯得十分重要。我們實驗是希望架設一個網站提供合作對象上傳訓練資料，幫助我們蒐集台灣資訊並期許能建立屬於本土的資料集。
      針對這個網站需求，我們使用最常見的 HTML5 來架設網頁前端、使用 PHP
      使網頁與伺服器端互動、利用 MySQL 來儲存大量上傳資料。以下是 HTML5、PHP
      、MySQL 的簡介。
      <SizeBox height="20" />
      <div class="text-xl font-bold">什麼是 HTML5？</div>
      <div>
        HTML5 就是 HTML 的第五次修訂的版本，由 W3C 在 2014 年 10
        月完成標準訂定。 廣義上來說，HTML5 是指包含了 HTML、CSS 和 JavaScript
        的一套技術組合，這三種技術也都有了創新，目的在於希望能夠減少網頁瀏覽器對於外掛程式的需要，比如
        Adobe Flash、Microsoft Silverlight 與 Oracle JavaFX。
      </div>
      <div class="flex justify-center">
        <div class="flex flex-row">
          <img :src="getImageUrl(`img/html.png`)" style="max-width: 100px" />
          <img :src="getImageUrl(`img/css.png`)" style="max-width: 100px" />
          <img :src="getImageUrl(`img/js.png`)" style="max-width: 100px" />
        </div>
      </div>
      <div>
        其中，因應 HTML5 新增了在以往都要靠 Flash
        才能完成的項目，如影音&lt;video&gt;、音訊&lt;audio&gt;、繪圖及動畫&lt;canvas&gt;…等功能，使
        Adobe Flash 在 2020 年全面停止更新，進而影響各大瀏覽器停止支援 Adobe
        Flash。
      </div>
      <SizeBox height="20" />
      <div class="text-xl font-bold">什麼是 MySQL ?</div>
      <div>
        MySQL
        是目前主流的關聯式資料庫其中之一，關聯式資料庫。以資料之間的關聯性為基礎架構的資料庫系統，通常把資料分類為資料表（table），然後再透過資料表之間的關聯性做查詢。因為使用結構化查詢語言（Structural
        Query Language, SQL），所以現在 SQL 與 RDBMS
        這兩個詞在台灣有某種程度的混用。
      </div>
      <img :src="getImageUrl(`img/mysql.png`)" />
      <div>
        MySQL
        一直以來以它的開放、低成本而著名，非常多的個人專案、小公司都會選擇用
        MySQL 當作資料庫。雖然 MySQL
        最有名的是它的低成本，但並不代表他沒有辦法扛住高流量的商業應用，依然有非常多的大公司選用
        MySQL 當作他們的資料庫。
      </div>
      <SizeBox height="20" />
      <div class="text-xl font-bold">什麼是 PHP ?</div>
      <div>
        PHP（中文名：超文本預處理器）是一種通用開源腳本語言。語法吸收了
        C語言、Java 和Perl 的特點，利於學習，使用廣泛，主要適用於 Web
        開發領域。PHP 獨特的語法混合了 C、Java、Perl 以及 PHP
        自創的語法。它可以比 CGI 或者 Perl 更快速地執行動態網頁。用 PHP
        做出的動態頁面與其他的程式語言相比，PHP 是將程序嵌入到 HTML
        文檔中去執行，執行效率比完全生成 HTML 標記的 CGI 要高許多；PHP
        還可以執行編譯後代碼，編譯可以達到加密和優化代碼運行，使代碼運行更快。
      </div>
      <img :src="getImageUrl(`img/php.png`)" />
      <div>
        以上是 HTML5、PHP 、MySQL
        的簡介。由於這是我們第一次架設實用性的網頁，在學習網頁製作的過程中難免遇到波折與突發事件，除了讓我們確認這些工具的方便之處，也看到這些工具的適用範圍與缺點，例如
        PHP 將程序嵌入到 HTML 文檔中，使得程式和開發流程十分雜亂、不易管理 ...
        促發我們尋找並使用另一套新工具開發網頁的想法，而我們找到的新世代網頁開發工具將會在網頁架構製作
        ( 下 ) 中跟大家介紹。
      </div>
    </div>
  </div>
</template>

<script setup>
import SizeBox from "@/components/SizeBox.vue";

const getImageUrl = (name) => {
  return new URL(`../../assets/${name}`, import.meta.url).href;
};
</script>
