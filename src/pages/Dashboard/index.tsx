import React from 'react';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { FiClock, FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>

            <button onClick={signOut} type="button">
              <FiPower />
            </button>
          </Profile>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/48420092?s=460&u=7a83e3e5782a85872885697596c0360d85712dca&v=4"
                alt="Fernando"
              />
              <strong>Fernando Abreu</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>

            <Section>
              <strong>Manhã</strong>
            </Section>

            <Section>
              <strong>Tarde</strong>
            </Section>
          </NextAppointment>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
