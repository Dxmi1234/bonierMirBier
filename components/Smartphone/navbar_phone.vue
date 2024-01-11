<template>
    <div>

        <ul class="list">
             <li><a href="#">Home</a></li>
             <li><a href="#">News</a></li>
             <li><a href="#">Contact</a></li>
             <li><a href="#">About</a></li>
             
        </ul>


    </div>
</template>

<style scoped>

.list{
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #333;
  overflow: hidden;
}

.list li{
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.list li:active{
  background-color: #ddd;
  color: black;
}

</style>