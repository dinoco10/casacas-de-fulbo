import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, query, where, } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { UserAuth } from '../Context/AuthContext'
import firebase from "firebase/app"
import "firebase/auth"


 
export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate();

  const { createUser } = UserAuth 

  const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
          await createUser(email, password);
          navigate('/')
        } catch (e) { 
          setError(e.message)
          console.log(e.message)
        }
  }



return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Registrate</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={(e) => setEmail(e.target.value)} type="email"  required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} type="password"  required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Registrate
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Tienes una cuenta? <Link to="/signin">Inicia Sesion</Link>
      </div>
    </>
  )
}


