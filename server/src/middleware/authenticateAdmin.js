import User from '../models/user'

const authenticateAdmin = async (req, res, next) => {
  const token = req.header('x-auth')

  try {
    const user = await User.findByToken(token)
    if (!user) throw 'You need to signin'
    if (user.power !== 'admin') throw 'You do not have the perm permission'

    req.userData = {
      id: user.id,
      username: user.username,
      name: user.name,
      company: user.company,
      power: user.power,
    }
    return next()
  } catch (err) {
    return res.status(401).send(err)
  }
}

export default authenticateAdmin
