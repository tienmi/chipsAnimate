<script setup>
import { useMeta } from 'vue-meta';

useMeta({
    htmlAttrs: { lang: 'zh-TW' }
});
</script>

<template>
    <metainfo>
        <template #title="{ content }">
            {{ content ? `${content} | Licensing` : 'Licensing' }}
        </template>
    </metainfo>
    <div class="layout">
        <router-view />
    </div>
</template>
