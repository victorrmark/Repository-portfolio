import { useState, useContext } from "react";
import UserContext from "../assets/UserContext";
import '../assets/repoform.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const NewRepoForm = () => {
  const {setRepos, setFilteredRepos} = useContext(UserContext)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState('false');
  const [autoInit, setAutoInit] = useState('false');
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const data = {
      name,
      description,
      private: isPrivate === 'true',
      auto_init: autoInit === 'true',
    };

    try {
      const response = await fetch('https://api.github.com/user/repos', {
        method: 'POST',
        headers: {
          'Authorization': `token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const newRepo = await response.json()
        toast.success('Repository created successfully!');
        setRepos((prevRepos) => [...prevRepos, newRepo])
        setFilteredRepos((prevRepos) => [...prevRepos, newRepo])
        
        setName('');
        setDescription('');
        setIsPrivate('false');
        setAutoInit('false');
        setLoading(false)
      } else {
        const errorData = await response.json();
        console.log(errorData)
        toast.error(`Failed to create repository: ${errorData.message}`);
        setLoading(false)
      }
    } catch (error) {
      toast.error('Failed to create repository. Check console for details.');
      console.error(error);
      setLoading(false)
    }

  };


  return (
    <div className="create-repo">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Repository Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Private:</label>
          <select value={isPrivate} onChange={(e) => setIsPrivate(e.target.value)}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label>Initialize with README:</label>
          <select value={autoInit} onChange={(e) => setAutoInit(e.target.value)}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>

        {loading ? <button disabled type="submit">Creating Repo...</button> :  <button type="submit">Create Repository</button>}
      </form>
      <ToastContainer />
    </div>
  );
};

export default NewRepoForm;
