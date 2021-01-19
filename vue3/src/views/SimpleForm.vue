<template>
  <div>
    <h1>Create an event</h1>
    <form>
      <BaseSelect
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />

      <h3>Name & describe your event</h3>

      <BaseInput v-model="event.title" label="Title" type="text" />

      <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>

      <BaseInput v-model="event.location" label="Location" type="text" />

      <h3>Are pets allowed?</h3>
      <div>
        <BaseRadioGroup
          v-model="event.pets"
          name="pets"
          :options="petOptions"
        />
      </div>

      <h3>Extras</h3>
      <div>
        <BaseCheckbox v-model="event.extras.catering" label="Catering" />
      </div>

      <div>
        <BaseCheckbox v-model="event.extras.music" label="Live music" />
      </div>

      <button class="button -fill-gradient" type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'

export default {
  name: 'SimpleForm',
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseRadioGroup,
  },
  data() {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community',
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
      petOptions: [
        {
          label: 'Yes',
          value: 1,
        },
        {
          label: 'No',
          value: 0,
        },
      ],
    }
  },
}
</script>
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  display: flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
}
h3 {
  font-size: 28px;
  font-weight: 700;
}
form {
  text-align: left;
}
button,
label,
input,
optgroup,
textarea {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
</style>>
