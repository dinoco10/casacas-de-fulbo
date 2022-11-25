import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, query, where, } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

import firebase from "firebase/app"
import "firebase/auth"


 
export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  
return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Inicia Sesion</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Inicia Sesion
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        No tienes cuenta? <Link to="/signup">Registrate</Link>
      </div>
    </>
  )
}


