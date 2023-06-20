import { ReactNode, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { IssueProfileCard } from './components/IssueProfileCard';
import { IssueBoxContainer, IssueContainer, IssueContentContainer } from './styles';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'

interface Issue {
  body: any;
}

export function Issue() {
  const [Issue, setIssue] = useState<Issue>()
  const {index} = useParams()
  
  useEffect(() => { 
    api.get(`repos/sergiosaruijr/projeto-github-blog/issues/${index}`).then( info => setIssue(info.data))
    // api.get(`/repos`).then( info => console.log(info.data))
  } ,[])


  return(
    <>
      <Header />
      <IssueContainer>
        <IssueProfileCard />
        <IssueBoxContainer>
          <IssueContentContainer>
            <ReactMarkdown>{Issue?.body}</ReactMarkdown>
          </IssueContentContainer>
        </IssueBoxContainer>
      </IssueContainer>
    </>
    
  )
}