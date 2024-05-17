package com.example.entities;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data // Creates getters and setters automatically
@Entity
@Table(name = "enduser")
public class UserEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String firstname;
	private String surname;
	private String email;
	@JsonIgnore
	private String newpassword;
	private String image;
    private boolean isentity;
	private String entity;
	
	@JsonIgnore
	@ManyToMany
	@JoinTable(
			name="user_has_events",
			joinColumns=@JoinColumn(name="id_enduser"),
			inverseJoinColumns=@JoinColumn(name="id_activity")
			)
	private List<EventEntity> events = new ArrayList<>();
	
	
	@JsonIgnore
	@ManyToMany
	@JoinTable(
			name="saved_events",
			joinColumns=@JoinColumn(name="id_enduser"),
			inverseJoinColumns=@JoinColumn(name="id_activity")
			)
	private List<EventEntity> savedEvents = new ArrayList<>();
}
