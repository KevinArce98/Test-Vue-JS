<template>
	<div>
		<h2 class="mb-3">Data List</h2>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Data</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>


<script>
export default {
    name: 'TableData',
    data(){
        return {
            list: []
        }
    }
}
</script>