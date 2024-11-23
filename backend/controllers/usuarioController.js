exports.crearUsuario = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Faltan datos requeridos' });
    }

    return res.status(201).json({
        message: 'Usuario registrado correctamente',
        usuario: { name, email, password },
    });
};
