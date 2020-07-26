<template>
  <div>
    <input
      type="text"
      style="margin-bottom: 50px; padding: 10px;"
      @input="searchJobs($event.target.value)"
    />

    <section
      class="joke-item"
      :key="key"
      v-for="(job, key) in jobs"
      style="width: 500px; margin: 0 auto 25px auto; border: 1px solid #ccc; padding: 15px; border-radius: 5px;"
    >

      <h3 style="display: flex; align-items: center; justify-content: center;">
        <img
          :src="job.company_logo"
          style="width: 35px; height 35px; margin-right: 15px;"
        />

        {{ job.company }}
      </h3>

      <div>
        {{ job.title }}
      </div>

      <div>
        {{ job.type }}
      </div>

      <div>
        {{ job.location }}
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  async setup() {
    const store = useStore();
    const jobs = computed(() => store.getters['jobs/getJokes']);
    await store.dispatch("jobs/getJokes");

    function searchJobs(searchText) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(async () => {
        await store.dispatch(
          "jobs/getJokes",
          `?search=${searchText}`
        );
      }, 300);
    }

    return {
      jobs,
      searchJobs
      // isLoading
    };
  }
});
</script>
