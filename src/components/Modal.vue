<template>
    <div class="modal">
        <form @submit.prevent="addModalCyti">
                    <input
                  class="model"
                  v-model.trim="title"
                  type="text"
                  placeholder="Отделение"
                />
                <input
                  class="model"
                  v-model.trim="total"
                  type="text"
                  placeholder="Обище количество"
                />
                <input
                  class="model"
                  v-model.trim="fact"
                  type="text"
                  placeholder="Фактическое количество"
                />
                <button class="model" type="submit">Добавить</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "modal",

}
</script>