import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

async function start() {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
}

start()
