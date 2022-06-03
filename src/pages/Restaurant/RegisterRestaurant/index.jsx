import { Container, Flex, Text } from "@chakra-ui/react";
import { Button, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import useForm from "../../../hooks/useForm";

import { Contained, StyledInput } from "./styled";

export const RegisterRestaurant = () => {
  const { form, onChangeForm, errors, setErrors, span, setSpan } = useForm({
    nome: "",
    endereco: "",
    cnpj: "",
    categoria: "",
    imgURL: ""
  });
  return (
    <Contained justify="center" direction="column" align="center" minH="100vh">
      <Typography variant="h4" p="0.5rem">
        CADASTRO DE RESTAURANTE
      </Typography>
      <form method="POST">
        <Container>
          <Text>Nome</Text>
          <StyledInput
            type={"text"}
            name={"nome"}
            required
            value={form.nome}
            onChange={onChangeForm}
            size="md"
            w="30rem"
            p="0.5rem"
            autofocus
            placeholder="Digite o Nome do Restaurante"
            autoComplete="name"
          />
        </Container>
        <Container>
          <Text>Endereço</Text>
          <StyledInput
            type={"text"}
            name={"endereco"}
            required
            value={form.endereco}
            onChange={onChangeForm}
            size="md"
            w="30rem"
            p="0.5rem"
            placeholder="Digite o Logradouro"
          />
        </Container>
        <Container>
          <Text>CNPJ</Text>
          <StyledInput
            type={"text"}
            name={"cnpj"}
            required
            value={form.cnpj}
            onChange={onChangeForm}
            size="md"
            w="30rem"
            p="0.5rem"
            placeholder="Digite o CNPJ"
          />
        </Container>
        <Container>
          <Text>Image URL (opcional)</Text>
          <StyledInput
            type={"text"}
            name={"imgURL"}
            value={form.imgURL}
            onChange={onChangeForm}
            size="md"
            w="30rem"
            p="0.5rem"
            placeholder="Digite a URL da imagem do produto"
          />
        </Container>
        <Container>
          <Text>Categoria</Text>
          <Select
            autoWidth={true}
            onChange={onChangeForm}
            name={"categoria"}
            value={form.categoria}
            required
            label="Selecione seu sexo"
          >
            <MenuItem value={"pizzaria"}>Pizzaria</MenuItem>
            <MenuItem value={"japones"}>Restaurante Japonês</MenuItem>
            <MenuItem value={"arabe"}>Restaurante Árabe</MenuItem>
            <MenuItem value={"mexicano"}>Restaurante Mexicano</MenuItem>
            <MenuItem value={"lanchonete"}>Lanchonete</MenuItem>
            <MenuItem value={"padaria"}>Padaria</MenuItem>
            <MenuItem value={"doceria"}>Doceria</MenuItem>
          </Select>
        </Container>
        <Flex justify="center" align="center" m={"1rem"}>
          <Button type={"submit"} variant="contained">
            Cadastrar
          </Button>
        </Flex>
      </form>
    </Contained>
  );
};
