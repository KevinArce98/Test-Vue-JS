<template>
	<div>
		<form @submit.prevent="addUser">
			<h2>{{ isEditing ? "Save" : "Add" }} User</h2>
			<hr />
			<div class="form-group">
				<label for="name">Username</label>
				<input
					type="text"
					class="form-control"
					id="name"
					v-model="username"
					required
				/>
			</div>
			<div class="form-group">
				<label for="email">Email</label>
				<input
					type="email"
					class="form-control"
					id="email"
					required
					v-model="email"
				/>
			</div>

			<div class="form-group">
				<label for="age">Age</label>
				<input
					type="number"
					class="form-control"
					id="age"
					min="1"
					required
					v-model="age"
				/>
			</div>

			<div class="form-group">
				<label for="date">Creation Date</label>
				<input
					type="date"
					class="form-control"
					id="date"
					required
					v-model="date"
				/>
			</div>

			<div class="form-group">
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						id="is_admin_label"
						value="option1"
						v-model="isAdmin"
					/>
					<label class="form-check-label" for="is_admin_label"
						>Is admin</label
					>
				</div>
			</div>
			<button type="submit" class="btn btn-primary">
				{{ isEditing ? "Save" : "Add" }}
			</button>
		</form>
	</div>
</template>

<script>
export default {
	name: "FormAdd",
	data() {
		return {
			username: "",
			email: "",
			age: "",
			date: new Date().toJSON().slice(0, 10),
			isAdmin: false,
			isEditing: false,
		};
	},
	methods: {
		addUser() {
			const data = `${this.username}|${this.email}|${this.age}|${this.date}|${this.isAdmin}`;
			console.log(data);
		},
	},
};
</script>
