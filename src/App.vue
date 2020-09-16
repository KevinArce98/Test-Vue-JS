<template>
	<div id="app">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-4">
					<FormAdd />
				</div>
				<div class="col-md-8">
					<TableData/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import FormAdd from "./components/Form";
import TableData from "./components/TableData";

export default {
	name: "App",
	components: {
		FormAdd,
		TableData
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
