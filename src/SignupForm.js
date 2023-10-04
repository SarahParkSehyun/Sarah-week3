import React, { useState } from 'react';
import backgroundImage from './배경.svg';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [nicknameTouched, setNicknameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmpasswordTouched, setConfirmPasswordTouched] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!name) newErrors.name = '필수 입력 항목입니다!';
    if (nickname.length < 2 || nickname.length > 5) newErrors.nickname = '닉네임은 2~5글자로 구성해주세요!';
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) newErrors.email = '올바른 메일 형식이 아닙니다!';
    if (!/^[A-Za-z0-9!@#$%^&*()_+]{8,}$/.test(password)) newErrors.password = '영어+숫자+특수문자를 조합하여 작성해주세요.';
    if (password !== confirmPassword) newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setShowModal(true);
  };
  return (
    <div className="bg-fixed bg-center bg-cover h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="w-auto p-12 px-40 bg-opacity-60 bg-white rounded-lg max-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-center">회원 가입</h1>
        <hr className="mb-6" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block mb-1 text-white">이름</label>
            <input
              type="text"
              className="w-full p-2 pl-16 placeholder-white bg-opacity-0 rounded border border-white text-black"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validate();
              }}
              onBlur={() => setNameTouched(true)}
            />
            {nameTouched && (errors.name ? <div className="text-red-500 text-sm mt-1">{errors.name}</div> : <div className="text-green-500 text-sm mt-1">멋진 이름이네요!</div>)}
          </div>

          <div className="relative">
            <label className="block mb-1 text-white">닉네임</label>
            <input
              type="text"
              className="w-full p-2 pl-16 placeholder-white bg-opacity-0 rounded border border-white text-black"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
                validate();
              }}
              onBlur={() => setNicknameTouched(true)}
            />
            {nicknameTouched && (errors.nickname ? <div className="text-red-500 text-sm mt-1">{errors.nickname}</div> : <div className="text-green-500 text-sm mt-1">멋진 닉네임이군요!</div>)}
          </div>

          <div className="relative">
            <label className="block mb-1 text-white">이메일</label>
            <input
              type="email"
              className="w-full p-2 pl-16 placeholder-white bg-opacity-0 rounded border border-white text-black"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validate();
              }}
              onBlur={() => setEmailTouched(true)}
            />
            {emailTouched && (errors.email ? <div className="text-red-500 text-sm mt-1">{errors.email}</div> : <div className="text-green-500 text-sm mt-1">올바른 메일 형식입니다!</div>)}
          </div>

          <div className="relative">
            <label className="block mb-1 text-white">비밀번호</label>
            <input
              type="password"
              className="w-full p-2 pl-16 placeholder-white bg-opacity-0 rounded border border-white text-black"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validate();
              }}
              onBlur={() => setPasswordTouched(true)}
            />
            {passwordTouched && (errors.password ? <div className="text-red-500 text-sm mt-1">{errors.password}</div> : <div className="text-green-500 text-sm mt-1">완전한 비밀번호입니다!!</div>)}

          </div>

          <div className="relative">
            <label className="block mb-1 text-white">비밀번호 확인</label>
            <input
              type="password"
              className="w-full p-2 pl-16 placeholder-white bg-opacity-0 rounded border border-white text-black"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validate();
              }}
              onBlur={() => setConfirmPasswordTouched(true)}
            />
            {confirmpasswordTouched && (errors.confirmPassword ? <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div> : <div className="text-green-500 text-sm mt-1">비밀번호가 일치합니다.</div>)}
          </div>

          <button type="submit" disabled={Object.keys(errors).length !== 0} className="w-full p-2 mt-4 rounded bg-gray-500 text-white">가입하기</button>
        </form>
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
            <div className="p-8 bg-white rounded-lg">
              <h2 className="text-xl mb-4">가입 성공!</h2>
              <p>umc 챌린저 가입을 축하합니다!!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
