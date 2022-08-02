<template>
  <div class="m-20 text-3xl">實驗研究同意書（臉部實驗免責同意書）</div>
  <div class="max-w-4xl bg-gray-100 p-10 md:ml-20">
    <div class="text-2xl">蒐集個人資料告知事項暨個人資料提供同意書</div>
    <br />
    <br />
    <span class="text-xl">蒐集個人資料告知事項</span>
    <br />
    AI
    彩妝實驗室為遵守個人資料保護法規定，在您提供個人資料予本實驗室前，依法告知下列事項：
    <ol class="list-inside list-cjk">
      <li>
        AI彩妝實驗室(以下簡稱本實驗室)因學術研究、產學合作等目的而獲取您下列個人資料類別：姓名、肖像、連絡方式(包括但不限於電話號碼、E-MAIL、居住或工作地址)等，或其他得以直接或間接識別您個人之資料。
      </li>
      <li>若您上傳他人個人資料，應取得對方同意，本實驗室不負相關法律責任。</li>
      <li>
        本實驗室將依個人資料保護法及相關法令之規定下，依本實驗室隱私權保護政策，蒐集、處理及使用您的個人資料。
      </li>
      <li>本實驗室將於蒐集目的之存續期間合理使用您的個人資料。</li>
      <li>
        除蒐集及使用之目的涉及國際業務或活動外，本實驗室僅於中華民國領域內使用您的個人資料。
      </li>
      <li>
        本實驗室將於原蒐集之特定目的、本次以外之推廣、宣導、輔導、修飾及公開展示、以及其他公務機關請求行政協助之目的範圍內，合理使用您的個人資料。
      </li>
      <li>
        您可依個人資料保護法第 3
        條規定，就您的個人資料向本實驗室行使之下列權利：
        <ol class="list-inside list-decimal">
          <li>查詢或請求閱覽。</li>
          <li>請求製給複製本。</li>
          <li>請求補充或更正。</li>
          <li>請求停止蒐集、處理及利用。</li>
          <li>請求刪除。</li>
        </ol>
        您因行使上述權利而導致對您的權益產生減損時，本實驗室不負相關賠償責任。另依個人資料保護法第
        14 條規定，本實驗室得酌收行政作業費用。
      </li>
      <li>
        若您未提供正確之個人資料，本實驗室將無法為您提供特定目的之相關業務。
      </li>
      <li>
        本實驗室因業務需要而委託其他機關處理您的個人資料時，本實驗室將會善盡監督之責。
      </li>
      <li>
        您瞭解此一同意書符合個人資料保護法及相關法規之要求，且同意本實驗室留存此同意書，供日後取出查驗。
      </li>
    </ol>

    <br />

    <span class="text-xl">個人資料之同意提供 </span>
    <ol class="list-inside list-cjk">
      <li>本人已充分知悉貴處上述告知事項。</li>
      <li>
        本人同意貴處蒐集、處理、使用本人之個人資料，以及其他公務機關請求行政協助目的之提供，且同意上述個人資料，貴處就非營利範圍內享有完整之著作權。
      </li>
      <li>
        本人同意貴處使用本人之個人資料所創造出的作品所有權屬於AI彩妝實驗室及其產學合作對象。
      </li>
    </ol>
    <SizeBox height="30" />
    <div class="flex justify-end">
      <router-link
        to="/makeupPhotos/upload"
        class="bg-gray-50 px-4 py-2 text-lg"
        >同意</router-link
      >
      <SizeBox width="10" />
      <router-link to="/" class="bg-gray-50 px-4 py-2 text-lg"
        >不同意/回首頁</router-link
      >
    </div>
  </div>
  <SizeBox height="30" />
</template>

<script setup>
import SizeBox from "@/components/SizeBox.vue";
</script>
