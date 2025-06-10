import { Request, Response } from "express";
import { comparePassword, hashPassword } from "../services/password.service";
import prisma from "../models/user";
import { generateToken } from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    if (!email) {
      res.status(400).json({
        message: "El email es obligatorio",
      });
      return;
    }

    if (!password) {
      res.status(400).json({
        message: "La password es obligatoria",
      });
      return;
    }
    const hashedPassword = await hashPassword(password);
    console.log(hashedPassword);
    const user = await prisma.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error: any) {
    if (error?.code === "P2002" && error?.meta?.target?.includes("email")) {
      res.status(400).json({
        message: "El email ingresado ya existe.",
      });
    }

    console.log(error);
    res.status(500).json({ error: "ERROR AL REGISTRAR" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    if (!email) {
      res.status(400).json({
        message: "El email es obligatorio",
      });
      return;
    }

    if (!password) {
      res.status(400).json({
        message: "La password es obligatoria",
      });
      return;
    }
    const user = await prisma.findUnique({
      where: { email: email },
    });
    if (!user) {
      res.status(404).json({
        error: "El usuario y la contraseña no coinciden",
      });
      return;
    }
// ---------- COMPARADOR DE CONTRASEÑAS-----------
    const passwordMatch = await comparePassword(password, user.password) 

    if(!passwordMatch){
        res.status(401).json(
            {
                error: 'Usuario y contraseñas no coinciden'
            }
        )
    }

    const token = generateToken(user);
    res.status(200).json({token})
  } catch (error) {
    console.log('Error:', error)
  }
};
