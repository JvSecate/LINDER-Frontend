import React from "react";
import {Avatar, Button, Input, Paragraph, ScrollView, Separator, Sheet, Stack, styled, XStack, YStack,} from "tamagui";
import {ArrowBigDownDash, Search} from "@tamagui/lucide-icons";
import {JobModel, UserModel} from "../../models";
import {StyleSheet} from "react-native";

import {jobs, useUser} from "../../hooks";
import Screen from "../screen";

type FindBarProps = {
    onSearchChanged: (text: string) => void;
};

const FindBar = ({...props}: FindBarProps) => {
    const [search, setSearch] = React.useState("");

    const onSearch = () => {
        props.onSearchChanged(search);
    };

    return (
        <XStack alignItems="center" space="$3" flex={1}>
            <Input
                size={"$5"}
                placeholder="Procure por vagas"
                flex={1}
                onChangeText={setSearch}
                onSubmitEditing={onSearch}
            />
            <Button
                size={"$5"}
                maxWidth={45}
                icon={<Search size={"$1"}/>}
                onPress={onSearch}
            />
        </XStack>
    );
};

const StyledJobTag = styled(XStack, {
    backgroundColor: "$gray10",
    borderRadius: "$2",
    padding: "$1",
    space: "$1",

    variants: {
        variant: {
            new: {
                backgroundColor: "$orange10",
            },
            featured: {
                // gold
                backgroundColor: "#d0ae63",
            },
            remote: {
                backgroundColor: "$green10",
            },
            "full-time": {
                backgroundColor: "$blue10",
            },
            "part-time": {
                backgroundColor: "$yellow10",
            },
            present: {
                backgroundColor: "$red10",
            },
        },
    },
});

type JobTagProps = React.PropsWithChildren<
    React.ComponentProps<typeof StyledJobTag>
>;

const JobTag = ({children, ...props}: JobTagProps) => {
    return (
        <StyledJobTag {...props}>
            <Paragraph size="$4" fontWeight="800">
                {children}
            </Paragraph>
        </StyledJobTag>
    );
};

type JobTagsProps = {
    new?: boolean;
    featured?: boolean;
    remote?: boolean;
    fullTime?: boolean;
    partTime?: boolean;
};

const JobTagsWrapper = styled(XStack, {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingVertical: "$2",
    space: "$2",
});

const JobTags = (props: JobTagsProps) => {
    const variants = {
        new: props.new,
        featured: props.featured,
        remote: props.remote,
        "full-time": props.fullTime,
        "part-time": props.partTime,
        present: !props.remote,
    };

    const texts = {
        new: "Novo",
        featured: "Destaque",
        remote: "Remoto",
        "full-time": "Integral",
        "part-time": "Parcial",
        present: "Presencial",
    };

    return (
        <ScrollView>
            <JobTagsWrapper>
                {Object.keys(variants).map((key: any) => {
                    if (variants[key]) {
                        return (
                            <JobTag key={key} variant={key}>
                                {texts[key]}
                            </JobTag>
                        );
                    }
                })}
            </JobTagsWrapper>
        </ScrollView>
    );
};

type JobPropsType = {
    job: JobModel;
    onSelect?: () => void;
};

function Job({job, onSelect}: JobPropsType) {
    return (
        <XStack
            alignItems="center"
            p="$4"
            pressStyle={{backgroundColor: "$gray7"}}
            onPress={onSelect}
        >
            <YStack height={"100%"} justifyContent={"flex-start"}>
                <Avatar circular size="$4">
                    <Avatar.Image accessibilityLabel="Cam" src={job.company.logo}/>
                    <Avatar.Fallback backgroundColor="$blue10"/>
                </Avatar>
            </YStack>
            <XStack flex={1} paddingHorizontal={"$3"}>
                <YStack
                    borderBottomColor={"white"}
                    borderBottomWidth={StyleSheet.hairlineWidth}
                    width="100%"
                >
                    <Paragraph size="$6" fontWeight="800">
                        {job.title}
                    </Paragraph>
                    <Paragraph size="$5" fontWeight="500">
                        {job.company.name}
                    </Paragraph>
                    <Paragraph size="$4">
                        {job.company.location.city},{job.company.location.state},
                        {job.company.location.country}
                    </Paragraph>
                    <JobTags
                        part-time={job.partTime}
                        new={job.new}
                        featured={job.featured}
                        remote={job.remote}
                        full-time={job.fullTime}
                    />
                </YStack>
            </XStack>
        </XStack>
    );
}

type JobViewerProps = {
    job: JobModel;
    open: boolean;
    onOpenChange?: (open: boolean) => void;
    onClose?: () => void;
};

const JobViewer = ({job, open, onOpenChange, onClose}: JobViewerProps) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange} snapPoints={[90]}>
            <Sheet.Overlay
                animation="lazy"
                enterStyle={{opacity: 0}}
                exitStyle={{opacity: 0}}
            />
            <Sheet.ScrollView backgroundColor="$gray3">
                <Stack space="$3" paddingHorizontal={"$3"} pb={"$5"}>
                    <YStack jc={"center"} ai={"center"} pt={"$2"}>
                        <Button
                            size="$2"
                            width={"$7"}
                            borderRadius="$6"
                            marginVertical="$2"
                            backgroundColor="$gray7"
                            onPress={onClose}
                        >
                            <ArrowBigDownDash color={"white"} size={"$2"}/>
                        </Button>
                    </YStack>
                    <Job job={job}/>
                    <YStack space p={"$3"}>
                        <Button backgroundColor={"$gray7"}>
                            <Paragraph size="$8" fontWeight="800">
                                Aplicar
                            </Paragraph>
                        </Button>
                        <Paragraph size="$8" fontWeight="800">
                            Detalhes
                        </Paragraph>
                        <Paragraph size="$5">
                            {job.salary
                                ? `Salário: R$ ${job.salary.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}`
                                : "Salário: Não informado"}
                        </Paragraph>
                        <XStack ai={"center"}>
                            <Paragraph size="$6" fontWeight="800">
                                Categorias:{" "}
                            </Paragraph>
                            <Paragraph size="$5">
                                {job.categories.map((category, index) => {
                                    return (
                                        `${category.name}` +
                                        (index < job.categories.length - 1 ? ", " : "")
                                    );
                                })}
                            </Paragraph>
                        </XStack>
                        <YStack space="$2">
                            <Paragraph size="$6" fontWeight="800">
                                Descrição:
                            </Paragraph>
                            <Paragraph size="$5">{job.description}</Paragraph>
                        </YStack>
                        <YStack space="$2">
                            <Paragraph size="$6" fontWeight="800">
                                Requisitos:
                            </Paragraph>
                            <Paragraph size="$5">
                                {job.skills.map((requirement, index) => {
                                    return (
                                        `${requirement.name}` +
                                        (index < job.skills.length - 1 ? ", " : "")
                                    );
                                })}
                            </Paragraph>
                        </YStack>
                        <YStack space="$2">
                            <Paragraph size="$6" fontWeight="800">
                                Empresa:
                            </Paragraph>
                            <Paragraph size="$5">{job.company.description}</Paragraph>
                        </YStack>
                    </YStack>
                </Stack>
            </Sheet.ScrollView>
        </Sheet>
    );
};

export const JobsScreen = ({navigation}) => {
    const [filteredJobs, setFilteredJobs] = React.useState<JobModel[]>(jobs);
    const [search, setSearch] = React.useState<string>("");
    const [selectedJob, setSelectedJob] = React.useState<JobModel | null>(null);
    const [user, setUser] = React.useState<UserModel | null>(null);

    React.useEffect(() => {
        async function fetchUser() {
            setUser(await useUser())
        }

        fetchUser()
    }, [])

    React.useEffect(() => {
        if (search) {
            setFilteredJobs(
                jobs.filter((job) =>
                    job.title.toLowerCase().includes(search.toLowerCase())
                )
            );
        } else {
            setFilteredJobs(jobs);
        }
    }, [search]);

    if (!user) {
        return <></>
    }

    const selectJob = (id: number) => {
        const job = jobs.find((job) => job.id === id);
        if (job) {
            setSelectedJob(job);
        }
    };

    return (
        <Screen>
            <XStack space="$3" paddingHorizontal={"$3"}>
                <Avatar circular size="$5">
                    <Avatar.Image
                        accessibilityLabel="Cam"
                        src={user?.avatar}
                    />
                    <Avatar.Fallback backgroundColor="$blue10"/>
                </Avatar>
                <FindBar onSearchChanged={setSearch}/>
            </XStack>
            <Separator flex={1} marginTop={"$3"}/>
            <ScrollView maxHeight={"95%"}>
                <YStack>
                    {filteredJobs.map((job) => (
                        <Job onSelect={() => selectJob(job.id)} key={job.id} job={job}/>
                    ))}
                </YStack>
            </ScrollView>
            {selectedJob && (
                <JobViewer
                    job={selectedJob}
                    open={!!selectedJob}
                    onOpenChange={(open) => {
                        if (!open) {
                            setSelectedJob(null);
                        }
                    }}
                    onClose={() => setSelectedJob(null)}
                />
            )}
        </Screen>
    );
};
