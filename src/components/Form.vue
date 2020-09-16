<template>
	<div>
		<form @submit.prevent="seeResult">
			<h2>Add User</h2>
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

			<button type="submit" class="btn btn-info">
				See result
			</button>
		</form>

		<div
			class="alert alert-success mt-4"
			role="alert"
			v-if="isSaved"
		>
			Information saved
		</div>

		<div
			class="alert alert-info mt-4"
			role="alert"
			v-if="result !== Oldresult && ready"
		>
			<h4>The information changed</h4>

			<p class="m-0"><strong>Old information</strong></p>
			{{ Oldresult }}
			<p class="mb-0 mt-2"><strong>New information</strong></p>
			{{ result }}
		</div>

		<div class="card mt-2" v-if="result && !ready">
			<div class="card-header text-left">
				Result
			</div>
			<div class="card-body">
				<input type="text" class="form-control" v-model="result" />
				<div class="buttons-group mt-3">
					<button class="btn btn-warning" @click="parseCapture">
						Parse
					</button>

					<button class="btn btn-success ml-2" @click="saveCapture">
						Save
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { db } from "../config/firebase";
export default {
	name: "FormAdd",
	data() {
		return {
			username: "",
			email: "",
			age: "",
			date: new Date().toJSON().slice(0, 10),
			isAdmin: false,
			result: "",
			Oldresult: "",
			ready: false,
			isSaved: false
		};
	},
	methods: {
		seeResult() {
			const data = `${this.username}|${this.email}|${this.age}|${this.date}|${this.isAdmin}`;
			this.result = data;
			this.Oldresult = data;

			this.username = "";
			this.email = "";
			this.age = "";
			this.date = new Date().toJSON().slice(0, 10);
			this.isAdmin = false;
			this.ready = false;
			this.isSaved = false;
		},
		parseCapture() {
			const capture = this.result.split("|");
			this.username = capture[0] || "";
			this.email = capture[1] || "";
			this.age = capture[2] || "";
			this.date = capture[3] || new Date().toJSON().slice(0, 10);
			this.isAdmin = capture[4] === "true" ? true : false;
			this.ready = true;
		},
		async saveCapture() {
			try {
				const resDB = await db.collection("data").add({
					capture: this.result,
				});

				if (resDB.id) {
					this.ready = false;
					this.result = '';
					this.Oldresult = '';
					this.isSaved = true;
					this.$root.$emit('infoSaved', resDB)
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
