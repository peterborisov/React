import User from '../models/user';

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    //validation
    if (!name) {
        return res.status(400).send('Name is require')
    }
    if (!password || password.length < 6) {
        return res.status(400).send('Pass need to be 6 chars long')
    }
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(200).send('Email is taken');

    //register
    const user = new User(req.body);
    try {
        await user.save();
        console.log('User Created');
        return res.json({ ok: true })
    } catch (err) {
        console.log('Create user failed')
        return res.status(400).send('Error. Try again.')
    }
}