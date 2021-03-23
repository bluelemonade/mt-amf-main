<template>
    <div class="scrollable-area unselectable">
        
        <!-- der header -->
        <div class="copyright-header">
            <h1 >
                {{ content["headline-" +"de"] }}
            </h1>

            <div v-for="copypoint in content['copy-' + 'de']" :key="copypoint.index" class="copyright-item">
                <p class="label" v-html="copypoint[0]"> </p>
                <p v-html="copypoint[1]"> </p>
            </div>
        </div>

        <!-- einzelne copyrights nach menüpunkten sortiert -->
        <div class="copyright-liste">
            <div v-for="menupoint in content['copyright-' + 'de']" :key="menupoint.head.index" class="copyright-item">
                        <div class="menuname">
                        <span class="copyright-item-headline" v-html="menupoint.head">   </span>
                        </div>

                    <table v-for="items in menupoint.items" :key="items.index" class="styled-table">
                        <tbody>
                            <tr v-for="item in makeArrayOfArrays(items)" :key="item.index">
                                <th><span v-html="item[0]">  </span></th>
                                <th><span v-html="item[1]">  </span></th>
                            </tr>
                        </tbody>
                    </table>

            </div>
        </div>

    </div>
</template>



<script>
import Vue from 'vue'
import VueResource from "vue-resource";
Vue.use(VueResource);



export default {
    data() {
        return {
            content: "",
            endload: false
        }
    },
    created() {
        // var self = this;
        this.$http.get('./static/impressum.json').then(response => {
            // console.log("!!!!!  impressum wurde geladen! !!!!")
            this.content = response.body;
            // console.log(this.content);
        }, response => {
            console.log(response);
            console.log("!!!!! impressum wurde nicht geladen! !!!!!")
            this.endload = true;
        });
    },
    methods: {
        makeArrayOfArrays (bigArray) {
            // console.log(bigArray)
            const size = 2; 
            var arrayOfArrays = [];
            for (var i=0; i<bigArray.length; i+=size) {
                arrayOfArrays.push(bigArray.slice(i,i+size));
            }
            // console.log(arrayOfArrays);
            return arrayOfArrays;
        }
    }
}
</script>





<style scoped lang="scss">
.scrollable-area {
    height: 720px;
    width: 560px;
}

.scrollable-area::-webkit-scrollbar {
  width: 10px;
}

.scrollable-area::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.623); 
}

.scrollable-area::-webkit-scrollbar-thumb {
  background-color: rgb(88, 88, 88);
}

.copyright-header {
    font-family: FontBold;
    width: 516px;
    margin: 0 auto;
    text-align: left;
    margin-top: 60px;
}

h1 {
  font-family: FontBold;
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 24px;
  color: $blacktypo;
}

h1 .label {
  font-family: FontBoldItalic;
}

h3 {
    font-family: FontBold;
    font-size: 40px; 
    width: 516px;
    text-align: left;
    margin-top: 60px;
}

h2 {
    font-family: FontBold;
    font-size: 30px; 
}

p {
  font-family: FontLight;
  font-size: 26px;
  line-height: 40px;
  margin-top: 4px;
  margin-bottom: 20px;
}

.label {
  font-family: FontBoldItalic;
  font-size: 26px;
  line-height: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
}

b {
    font-family: FontBold;
}

.copyright-liste {
    font-family: FontLight;
    width: 476px;
    text-align: left;
    /* margin: 0 auto; */
    margin-top: 60px;
    margin-left: 24px;
}
.copyright-item-headline {
    font-family: FontBold;
    font-size: 22px;
    text-align: left;

}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.styled-table {
    font-family: FontLight;
    border-collapse: collapse;
    // margin: 25px 0;
    font-size: 18px;
    line-height: 26px;
    padding-left: 24px;
    /* font-family: sans-serif; */
    width: 532px;
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); */
}

table {
    margin-top: 10px;
}

tr {
    margin-top: 0px;
}

th {
    vertical-align: baseline;
    max-width: 440px;
    // word-break: normal;
    overflow-wrap: break-word;
    white-space: pre-wrap;  
}

// tbody {
//     margin-bottom: 10px;
// }
.menuname {
    margin-top: 20px;
    margin-bottom: 6px;
}
.styled-table thead tr {
    /* background-color: #009879; */
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    font-family: FontLight;
    font-size: 18px;
    line-height: 23px;
    // padding-top: 10px;
    text-align: left;
}

.oneitem {
    font-family: FontLight;
    font-size: 18px;
    // padding-left: 32px;
    text-align: left;

}
.styled-table tbody tr:nth-of-type(even) {
    /* background-color: #fdf3f3; */
}

// .styled-table tbody tr {
//     /* border-bottom: 1px solid #3b3b3b; */
//     margin-top: 20px;
// }

.styled-table tbody tr:last-of-type {
    /* border-bottom: 2px solid #757575; */
}

th:nth-of-type(odd) {
   width: 100px;
}

// table {
//     font-family: FontLight;
// }

</style>