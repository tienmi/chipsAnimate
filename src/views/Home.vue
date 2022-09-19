<script setup>
import { useMeta } from 'vue-meta';
import { ref, reactive } from 'vue';

useMeta({
    title: '首頁'
});

const cardList = ['BP', 'T', 'PP', 'B', 'P'];
const chipList = [10, 20, 30, 40, 50];
const selectedChip = ref(chipList[0]);
const pickChip = chip => {
    selectedChip.value = chip;
};
const sendBox = reactive([]);
const elList = {};
let index = 0;
const sendChips = card => {
    if (!elList[card]) elList[card] = document.getElementById(card);
    if (!elList['basePosition']) elList['basePosition'] = document.getElementById('sendBox');
    const targetX =
        elList[card].offsetLeft +
        elList[card].offsetWidth / 2 -
        elList['basePosition'].offsetWidth / 2;
    const targetY =
        elList['basePosition'].offsetTop - (elList[card].offsetTop + elList[card].offsetHeight);
    sendBox.push({ card, amount: selectedChip.value, targetX: 0, targetY: 0 });
    requestAnimationFrame(() => {
        sendBox[index].targetX = targetX;
        sendBox[index].targetY = targetY;
        index++;
    });
};
</script>

<template>
    <div class="home">
        <div class="card_table">
            <div
                v-for="card in cardList"
                :id="card"
                :key="card"
                class="card"
                @click="sendChips(card)"
            >
                {{ card }}
            </div>
        </div>
        <div id="sendBox" class="send_box">
            <div
                v-for="(chip, idx) in sendBox"
                :key="idx"
                :class="['send_chip', 'chip']"
                :style="{ transform: `translate(${chip.targetX}px, -${chip.targetY}px)` }"
            >
                {{ chip.amount }}
            </div>
        </div>
        <div class="chip_table">
            <div
                v-for="chip in chipList"
                :key="chip"
                :class="['chip', { selected: chip === selectedChip }]"
                @click="pickChip(chip)"
            >
                {{ chip }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    width: 800px;
    margin: auto;
    position: relative;

    .card_table {
        margin: 40px auto 360px;
        display: flex;
        flex-wrap: wrap;
        background-color: #068506;
        box-shadow: 4px 4px 8px #999;

        .card {
            color: #fff;
            flex: 1 1 30%;
            font-size: 24px;
            width: 100%;
            height: 160px;
            line-height: 160px;
            text-align: center;
            border: 1px #ccc solid;
            cursor: pointer;

            &:hover {
                background-color: #089308;
            }
        }
    }

    .send_box {
        width: 100%;

        .send_chip {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 160px;
            margin: auto;
            background-color: #e75b09;
            transition: 1s transform ease-in-out;
            pointer-events: none;
        }
    }

    .chip {
        border-radius: 99em;
        border: 3px #ccc solid;
        color: #ccc;
        text-align: center;
        width: 80px;
        height: 80px;
        line-height: 80px;
        font-weight: bold;
    }

    .selected {
        border-color: #eac623;
    }

    .chip_table {
        height: 120px;
        background-color: #068506;
        margin: auto;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;

        .chip {
            cursor: pointer;
            margin-right: 16px;

            &:nth-last-child(1) {
                margin-right: 0;
            }
        }
    }
}
</style>
