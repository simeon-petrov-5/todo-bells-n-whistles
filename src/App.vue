<script setup lang="ts">
import InlineBtn from './components/InlineBtn.vue';
</script>

<template>
  <section class="py-4 container">
    <h1 class="mb-6 text-center">
      Todo list with all those 🔔 & 🌬️
    </h1>

    <div class="grid grid-cols-[268px_1fr] gap-4">
      <aside>
        <ul class="list-reset">
          <li class="list-reset">
            <InlineBtn class="secondary outline">
              ➕ Add new todo
            </InlineBtn>
          </li>
          <li class="list-reset">
            <InlineBtn class="secondary outline">
              ✅ Mark all as resolved
            </InlineBtn>
          </li>
          <li class="list-reset">
            <InlineBtn class="secondary outline">
              ❎ Mark all as unresolved
            </InlineBtn>
          </li>
          <li class="list-reset">
            <InlineBtn class="secondary outline">
              🗑️ Delete all todos
            </InlineBtn>
          </li>
        </ul>
      </aside>

      <div>
        <ul class="list-reset">
          <li class="list-reset">
            <article class="flex items-center gap-3">
              <label for="checkbox-1" class="grow-1">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  name="checkbox-1"
                >
                <span class="!cursor-pointer !border-none" data-tooltip="Title">Title</span>

              </label>
              <InlineBtn data-tooltip="Resolve">
                ✅
              </InlineBtn>

              <InlineBtn data-tooltip="Unresolve">
                ❎
              </InlineBtn>
              <InlineBtn data-tooltip="Delete">
                🗑️
              </InlineBtn>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
