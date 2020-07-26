<template>
  <Suspense>
    <template #default>
      <JobList />
    </template>

    <template #fallback>loading...</template>
  </Suspense>
</template>

<script>
import { defineComponent } from "vue";
import JobList from "@/components/JobList";

export default defineComponent({
  components: {
    JobList
  },

  setup() {}
});
</script>
