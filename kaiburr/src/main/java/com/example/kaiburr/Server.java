package com.example.kaiburr;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;

@Document(collection  = "server")
public class Server {

	private String name;
	@Id
	private String id;
		private String language;
		private String framework;
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getLanguage() {
			return language;
		}
		public void setLanguage(String language) {
			this.language = language;
		}
		public String getFramework() {
			return framework;
		}
		public void setFramework(String framework) {
			this.framework = framework;
		}
		@Override
		public String toString() {
			return "Server [name=" + name + ", id=" + id + ", language=" + language + ", framework=" + framework + "]";
		}
		
		
		
		
}
