<template>
	<div>
		<h2 class="mb-3">Data List</h2>
		<table class="table table-striped">
			<thead class="thead-dark">
				<tr>
					<th scope="col">#</th>
					<th scope="col">Data</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(capture, index) in list"
					:key="`${capture}-${index}`"
				>
					<th scope="row">{{ index + 1 }}</th>
					<td>{{ capture.data }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { db } from "../config/firebase";

export default {
	name: "TableData",
	data() {
		return {
			list: [],
		};
	},
	created() {
		this.getList();
	},
	mounted() {
		this.$root.$on("infoSaved", () => {
			this.getList();
		});
	},
	methods: {
		async getList() {
			try {
				const resDB = await db.collection("data").get();
				this.list = [];
				resDB.forEach((res) => {
					const capture = {
						id: res.id,
						data: res.data().capture,
					};
					this.list.push(capture);
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
