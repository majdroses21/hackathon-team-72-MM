<template>
    <div>
        <Header />
        <br>
        <MainSkills/>
    </div>
</template>

<script setup>
const myLe = useState('test', ()=>'Hello')

console.log('myLe from index = ', myLe.value)
</script>