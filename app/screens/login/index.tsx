import {Button, Image, Input, Paragraph, XStack, YStack} from "tamagui";
import React, {useContext} from "react";
import {AuthContext} from "../../contexts/auth";

type LoginScreenProps = {
    navigation: any;
};

export const LoginScreen = ({navigation}: LoginScreenProps) => {
    const {signIn} = useContext(AuthContext);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = async () => {
        console.log("LoginScreen", email, password)
        if (email.length == 0 || password.length == 0) {
            alert('Preencha todos os campos');
            return;
        }
        await signIn(email, password);
    };

    return (
        <YStack
            position={"relative"}
            flex={1}
            backgroundColor={"#111"}
            paddingHorizontal={"$2"}
            paddingTop={"$4"}
        >
            <YStack flex={1} width={"100%"} ai={"center"} jc={"center"}>
                <Image
                    source={require("../../../assets/linder-logo.png")}
                    height={250}
                    width={250}
                    resizeMode={"contain"}
                />
                <YStack space ai={"center"} jc={"center"}>
                    <YStack width={"100%"} ai={"center"} jc={"center"} space={3}>
                        <Paragraph size={"$5"}>Ainda não tem uma conta?</Paragraph>
                        <Button
                            p={0}
                            m={0}
                            h={"auto"}
                            onPress={() => navigation.navigate("Register")}
                            backgroundColor={"transparent"}
                        >
                            <Paragraph
                                size={"$5"}
                                borderBottomWidth={1}
                                borderBottomColor={"white"}
                            >
                                Cadastre-se
                            </Paragraph>
                        </Button>
                    </YStack>
                    <YStack space={"$2"} ai={"center"} jc={"center"}>
                        <XStack maxWidth={"70%"} width={"100%"}>
                            <Input flex={1} placeholder={"Email"} onChangeText={setEmail}/>
                        </XStack>
                        <XStack maxWidth={"70%"} width={"100%"}>
                            <Input
                                flex={1}
                                placeholder={"Senha"}
                                onChangeText={setPassword}
                            />
                        </XStack>
                    </YStack>

                    <Button onPress={handleLogin}>Entrar</Button>

                    <Button p={0} m={0} h={"auto"} backgroundColor={"transparent"}>
                        <Paragraph
                            size={"$5"}
                            borderBottomWidth={1}
                            borderBottomColor={"white"}
                        >
                            Esqueceu sua senha?
                        </Paragraph>
                    </Button>
                </YStack>
            </YStack>
        </YStack>
    );
};
