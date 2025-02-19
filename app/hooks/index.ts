import {CityModel, CompanyModel, CountryModel, LocationModel, SkillModel, StateModel, UserModel} from "../models";

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const country: CountryModel = {
    id: 1,
    name: "Brasil",
    initials: "BR",
    createdAt: "2021-08-28T00:00:00.000000Z",
    updatedAt: "2021-08-28T00:00:00.000000Z"
}

export const state: StateModel = {
    id: 1,
    name: "São Paulo",
    initials: "SP",
    country_id: 1,
    createdAt: "2021-08-28T00:00:00.000000Z",
    updatedAt: "2021-08-28T00:00:00.000000Z",
}

export const city: CityModel = {
    id: 1,
    name: "São Paulo",
    state_id: 1,
    createdAt: "2021-08-28T00:00:00.000000Z",
    updatedAt: "2021-08-28T00:00:00.000000Z",
}

export const location: LocationModel = {
    id: 1,
    city: "São Paulo",
    state: "São Paulo",
    country: "Brasil",
    address: "Jardim Paulista",
    name: "Local teste",
    createdAt: "2021-08-28T00:00:00.000000Z",
    updatedAt: "2021-08-28T00:00:00.000000Z",
}

export const companies: CompanyModel[] = [
    {
        id: 1,
        name: "Google",
        location: location,
        active: true,
        description: "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
        email: "google@gmail.com",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
        logo: "https://th.bing.com/th?q=Google+Logo+Ong&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=strict&t=1&mw=247",
        website: "https://www.google.com.br",
    },
    {
        id: 2,
        name: "Facebook",
        location: location,
        active: true,
        description: "Facebook is an American online social media and social networking service owned by Facebook, Inc.",
        email: "facebook@gmail.com",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
        logo: "data:image/png;base64,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",
        website: "https://www.facebook.com",
    },
    {
        id: 3,
        name: "Microsoft",
        location: location,
        active: true,
        description: "Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington.",
        email: "microsoft@gmail.com",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEXz8/PzUyWBvAYFpvD/ugjz9PX19PXz+fr39fr69vPy9fp5uAAAofD/tgDz3Nji6tfzRADzTBfzmYew0oB/xfH70IDX5/P16tfz5eLo7eHzPADzlICs0Hfh6/N3wvH7znj07eEAnvDzvbPL3q6u1/L43q6vy/leAAABd0lEQVR4nO3cR1IDQRREwcb0SEgj770B7n9FNmhEBL1g8zUs8l2gIi9QKUmSpHs5vPtWFV4uANMwunUD3IyiS7+Jebgdx7bddb63uvt+dKOqIBw/xTaZNsLZc3CEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEjxVuJ7GNfwj7LQjTejcN7noTVu+z4PabgjB1wmumqm50JaAkSX/oLbxmKveiK/zqp8NxHtvx40bMn6dFbKdzgbi81MEdb8LeaRDdqiSsX2Kr541wMXiNjZCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPCxwuj/0kvb/6V5Gd2hmTqvokulm90HluNrFyhJ0j/rC6N0RI28dGy3AAAAAElFTkSuQmCC",
        website: "https://www.microsoft.com",
    },
    {
        id: 4,
        name: "Apple",
        location: location,
        active: true,
        description: "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.",
        email: "apple@gmail.com",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADr6+vz8/P4+Pirq6tra2vg4ODExMT19fXMzMzw8PAsLCzQ0NCnp6eysrLX19ePj4+5ublHR0dWVlZMTEx+fn6YmJifn5+FhYUmJibl5eVmZmY/Pz91dXW4uLiJiYkLCwtZWVkcHBwVFRU3Nzd5eXlvb28BqEBrAAAE/0lEQVR4nO2d63aqMBCFG0VB6w2xeK+Xqn3/N6zWWkES4fQke7Oy5vtd15rdQDLZMwkvL4IgCIIgCIIgCIIgCIIgCIIgCEKB/iBNQnYQzgina3VhzA7EDcHsQ/3QYsfigsZJ3fFQYZCqLEN2PNZpqTwROyDLdJIHgWrEDsku3Ud9Sr2yY7LKrChQsWOySqoR+MYOyibvGoEqZkdlEd0IKtVlh2WPqVagR69hpBe4Z8dljYZeoEd5d8+gkB2XNWKDwDk7MFuYnlHVYEdmi4lBYJsdmC363g9hYT/h21sYmoaQHZg1tPmo8ilhMwg8seOyxlgvsMeOyx5tvcIOOy576AV6ZHXrZ1J/Zpmie+idQO3W3i8H8a04i/plIBYnGm9ytRuPA+jXE3omyAv0rw7z0snIO27Y0TjhJm8Re7TI5zjPpYt9PPZs/hSuBI1wNBqFtbcyXruDbXuSrJP9aRZVfRaXwzRrbSTpsKYvaWfz+bDc7dLyqnV0Ujre61fv3hQTsm8+n+XV3cf/SZZ0CQu+nOb2SaQq1r9cDZP3/cukLilPoC8GZkMtPnNjk6uY/2EtxlFXjy+SW+JH80q/ucBPzcNF1VgXcT84/yDobg+V9V0gP6rVBvDOR/mfFJgyBZqqLHbh1YabfxmRv9ALOAKXIH1nDhRDFSjwLJEwisZSrhvwvn9QHpRdJmiFR7RCdEuYqQzoEuje0VAkc0kCtT465QHZBpzYYFKZLH2sQEPjnUPQ9g1a3w6d0QzQCuEpG1og3GFEDyF+BwwWOIALBC/2hN2vwRd1BX7XBN40EYqM/2o9/R9HvEDwrongJL5CBTLOQQ2hCsH59jfPikXWofRkIgVSzj1j1wqGDwzdGcLdtQuGU3VuoBzOXyEVUqqjplNnTmAIhE6lK4bAJlIhpTBqPNLjAkrvovHcmQsYKRt2OaRMpdC8u8lQqD0u4QpK7R5qJPqvkNKcAH1KKc200JmG0u0FdYMpPbTQ9XDGUAjNaT4ZCqF56YGhEOuWUs6dQBVSrquBKqRcBVKp/dwaDIVQy5vymELdRJUQFG6gChk3EYywCgl2G7pvljCIO6xCQokUausrxgYD26igCGui5t5Yt8AnG3iLPr7GBq0+fYN2M6qfHLQG2JLCd0CjN4r4F1GhR3HNkAh9F7HbixvIi16gbtQdpPPGUah2uIrp09sFXLJCzangPWKWOahquuNJBO01OLPpFUxREdzMngW1I8a6pllQyyLhBOkPIIG0JRHo85feneMI3KKPrbL9gqwoGq4DdgzyGBsn/QYKZJzmVmoLVchITsGtfPhBRF/bjn8T4Y0L6ApGihYIz78JzZjYvT6lcx+qkCEQWtQnfewKZw6zPhuIm2xol++iHBtKq+kVTDWRcSr/BuY5pV4QjehtJ3/o2X3yRjkOnMW5QtLNnndcbzJq8BUat01EW7a8C3uHAtdscVccXrZLfwmvuFsV63Ipu7OzNDX6UIubhZ96kfcjLnJwvDPzFPueRu0++lhejzqs4tY46kbjVtwuv42f/8mAAs8PCb9Hecs6MHyc5Ab+MsEKmPuHV/oWisicK9RmmcjT1Bf4p+aCQ0PfrlrjzzsX7bekzCVrFXyCpKYD+EMu4N60yvY8jLO/Seut78KylU6Ox7d2XPmDT+d5pz+cztP5dFPTLz0JgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiBU4At3BVAHfhJAVgAAAABJRU5ErkJggg==",
        website: "https://www.apple.com",
    },
    {
        id: 5,
        name: "Amazon",
        location: location,
        active: true,
        description: "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        email: "amazon@gmail.com",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
        logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEBAVFRUVFRUVFRUVFRUVFRUVFRUXFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGi4lHyU1MisrLys3KzI3Lys3NzA1Liw3NzcxNTctKy8tLTcuLTcuLTIyNystMy01Ly0tLS03Lf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQIHBAYIBQP/xABFEAACAQMABQgFCgQDCQAAAAAAAQIDBBEFEiExUQYHE0FhgZGhIjJxkrEIFCMzQlJicnPBNKKz0YLi8BUkVHSDo7LC4f/EABkBAQEBAQEBAAAAAAAAAAAAAAABBAIDBf/EACwRAQACAQIDBwMFAQAAAAAAAAABAgMEEQUSMRMhQVGBkbFCocEVYdHh8BT/2gAMAwEAAhEDEQA/AN4NkAAqZSJFAEZTEAAEAwXBQAAI2AbGSADLAAAEbDZAK2QBIBgpQAAIwKRkKmASKABjgGQAAEbAuQYlTAJFAAAjZAAASAFSBQABMgGiFyUCYKAAIw2GwGSAJACpAoAMAARhhsBkgGABUiGQAAZAxBkRICIyAAAGIFbIAAMiJFAEbKRoCAFwASKAABGxkAyAAAC4AiRkAABGMgGQACplIkUARsrPzlLZlvCW1t8OPYgMia6Oi8oOdjRVq3HpncTW+NBdJ/3G1DwkdQvOf+CeKOjpSXGpXUX7sYS+IG6dZFTT3M0dT+UDLPpaMWOy4afnSOx6H57tG1mo3EKtu/vTipw96Dcv5UBtAHDsL6nXpqrb1YVact0oSU4vjiS6zkxnn911oDLIyQAZYAAAjYbIBWyAqQESKUAAEABGGyAVsgCQBIpQAAMZsDj317To051q01CnTi5Sk9yUdrZ5k5xecq40lOVODlStE/QpJ4dRJ7JVmvWb36u5bN7WX375RWn3ClQsIPHS5rVUnvhB4pxa4OWs/bTRocADnaE0TVu69O2t461SpLVity3Zcm+pJJtvgjfOgeYuypwTvKtWvUx6Wo+ipp8Ipek+GW9vBFR54BvrldzG0HSlPRtScKsVlUqklOFTC9WMn6UJPi217N60NKLTaaaaeGnsaa3poD73I3ldc6NrKrbzeq2ukpNvo6seEl1PhLevFP1PoPTVK8tqV5bt6k45afrLGycJfii0/DtPHJvf5N2knKld20nshOnVh/1FKM12L6OPiyK3KjJI/Cy9RL7rlH3ZOP7HIAAEyAaIXJcATBQABGw2GwKARsCmJclAmCgACMMNgMmEzIIDXfOJzYQ0tWhcxu5UZxpqm/o1VhKMZSksLWi4vM3na+rYdGu+YK6X1N9Rnw14Tp/DWN71baDecbXwbi33pnHvb2haU5VbivGnTWMyq1NifUk5Pa3wQGvOaXmzraNr1bi7nSlNw6KmqTlJJNqU5NyjHD9GKWzibTNV6b587CllW1KrcvGyWOhpvs1p+kvcOo3/AD+XkvqLOhT/AFJVKr/lcAPQJ5A5f0VDSd7GO751Wa7Mzbx5nY7znn0vP1a1Kl+SjB/1NY6LpG+qV6s61aWtUqSc5ywlrSltbxFJLuQHHNv/ACbpf71dLqdCD8Kmz4s1Abe+Td/F3X6Ef6iKjfFlul+pP/yOScay3T/Un8T92RVZAMADIiRQBGykaAgBUgDZAMADJESKAI2UAYgFwASDZTF//QOt8vOV9LRds69Va05PUo0k9tSeM4z1RW9y/dpPy5ym5SXN/Wda7qucturHdCmn9mnDdFbu142tvado57OUDutJ1KalmnbfQQWdmsvrXjjr5XsgjoIA+zyf5KX19n5nazqpbHJYjTT4OpNqOezJ9Hmz5LrSV/ToTz0UVKrWw8N04YWqn2ylGOerWbPVtnawpQjTpQjCEEoxhFJRiluSS3FHnW35jdKSWXO1h2Sq1G17tNrzNf6b0ZO1uKttUcXOjOVOTjnVbi8NrKTx3HtFHkHnCqKWlL5r/iqy8JtP4EHXzb3yb/4u6/Qj/URqE278m/8Ai7r/AJeP9RFRviz+3+pP4nIOPZ/a/PP4nISIokUoAAGLYFyMkAGWAABikZAAEARsA2MkQAyAQAGPX3L9ytmPX7UB415TTcry5k97uK7ftdWTZ807Pzm6LlbaUu6bWyVaVWOzY4Vn0kccUtbH+FnWCo2t8nOtFaQrQfrTtpar/LUptpeOf8J6IPGGgtL1bO4p3NvLVqUpa0W1lPKalGS64tNp9jN3WPP5bOmunsq0amNqpyhKDfZKTi0u547SK2np7S1O0t6tzWeIUoOT24y/sxXbJtRXa0eNb26lVqTqz9epOVSWPvTk5S82zt/OFzj3OlGoOKo28XrRoxetmXVKpLZrPfjYkvM6UANm/J+0nGlpKVKTx09CcI9s4uNRLP5Yz8jWR+tpczpThVpScZwlGcJLfGUXmLXsaKj2lbx1ZSjxesu1Pf558jkHVuRPKX/aGj6d246tRKSmlu6Snsnq/hljPZnsO0ReVkiqCNkAMAqQEKkGUAATIFBMkAMAJAMFSKABHIpwr+dXom6GHNbcNZzj1l7Tm9uWszt08lrG8xDlqSf+tpJLavE+Ro3T1KriNT6Oe7D3N9kup9j8z7KRxizUy15qTvDrJjtjna0bNb88XN9LSNONxbJfOqMXFR2Lpqec6mXuknlx6vSknvTXm24oTpycKkJQnF4lCacZRa3qUXtTPbZ8TlDyRsb7+LtYVHjCnhxqJcFUi1JLsyerh47B6WrcyWim8pV49ka2z+aLfmc3R/NFoik1L5q6jW1dLUqSXfHKi+9AeeuSPJG70lV6O1pNpP06ssqlTX458fwrLfA3TpbmZtlo35vbYd3B9IriSSlVqYxKnL7tNrYo52PD27W9o2lpTpQVOlThThFYjCEVGMVwUVsR+2APE13bTpTlTqwlCcG4yjJYlGS2NNPczYfNhzXVdIONxdKVO0TyuqdfHVDhDjPuXW1vPTvIbR95WjXurWM6kcelmUdZLcqii0ppfizw3HYGtSPoQ9VejGOFuWyK6lwEybOJDRkKdBW9vCNOnFKKjFYShn0ku1rO3izm7eHmfBrzv5+rCFJfmjJ972/BHzr6d9RWtOo8ZxlOLWerKwfPycQikTPZ3289v5a6aTm7ueu/lu7br8dhkfI0VeTq20p1H6S19qWPVWU/bn4H1qTyk+xPyNmLJGSkXjpPez3pNLTWfBkkUA9HAAYgGwAABkTAEwZAAADFgVs/KSa2pe1cfZ2n6DAHwdNaEjWzUpYU+tblLsfCX+mfFstMV7d6kstR2OE85Xse9fA7rKntzHY/J+3+5w76xpV/RqxxPqa2SX5X1rs8j5mp0EzbtcE8tvtLdg1cRXs8sb1+H42PKKhU2Sl0cuEti7pbvgfVUk9qeVxOkaR5PVqeXFdJHjFekvbHf4ZPnW91Upv0Jyj2JteKMccUzYZ5NRT8f1Po0ToceWObDZskh0ijykuI75Rl+aK/9cHIjyrq9dOD95fuaq8Y089d49HhPDs0eTuCKdOlyrrdVOmvef7o41blHcS3TUfyxX75FuMaeOm8+hHDs09dod5bxvPl3nKChT+3rvhD0vPd5nSq1xUqPEpym3uTbl4I+to3k1Untq/Rx4fbfd9nv8DP+p5888unx+s/7aPd6/8ADixRvls5C0zcXM9SglTXW97S4yk9i9iRy+V9bVpRp5y5SXeora/FxPo2So030VJbvWa2pP8AHL73YfnW0br1+mqNasEtSPBra5Sz2/BGm2mz9jatrc1rd0+UR4/Z4xmxdpFojate+POZYUbd07aFH7U8Rftm8z8FreB9dI4Nt9JPpPsJNU+3PrT79y7Pac4+lSkUrFY6R3MdrTa02nxCNlMTpyAFSAJFYAETKRIoAjZTEAAVARIyAAGM4JrDWTIjYH4as4+q9ZcJb+6X9/E4t3QoVPrqWHxksP34/wBz6AObUreNrRvH7rW01neJ2dfqclqMttOpJd6kv7+Zx5ckX1V17n+Y7HO0pva4Rzxxh+JPmceM17Kk1+5itwzS2609t4/LTXW54+r4dehyR41/CH+Y5EeTlvT21ajf5pKK8sPzPruyh16z9s5v4sypWdOO2NOK7UlktOG6WvSnvvPyW1ue31OHbOlDZb0c9sY6q75y392T9nQqT+snqr7kM+Ep733YOYVI21rFY2iNoZpmZneX506EVHVUUo8FsR+M7KMvWcpL7rk9XvXX3nLBUEAYsDIGJUwCRQAAI2QDIAxbAuSmJUwGCgAARsgBgBIBgqKAABi2BkYlyUCYKAAIwyNgXJAVICFSBQAAyBiDIiQEyAEgIZJAoAAmQIDImACRQAABiwK2QDAAyIkUARsoAxALgAkUAACMmQDYAAqZSIoESKAABGTIBgACplIkUARspiAAKgIkZAAACNgTJckCAyAAAjYbIAbAKkASBQAAMWB//9k=",
        website: "https://www.amazon.com",
    },
    {
        id: 6,
        name: "Netflix",
        location: location,
        active: true,
        description: "Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California.",
        email: "netflix@gmail.com",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
        logo: "data:image/png;base64,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",
        website: "https://www.netflix.com",
    },
    {
        id: 7,
        name: "Tesla",
        location: location,
        active: true,
        description: "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California.",
        email: "tesla@gmail.com",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
        logo: "https://th.bing.com/th/id/OIP.m1ar389tpEOAFN1NTurqvwHaHa?rs=1&pid=ImgDetMain",
        website: "https://www.tesla.com",
    }
]

export const categories = [
    {
        id: 1,
        name: "Web Development",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 2,
        name: "Mobile Development",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 3,
        name: "Design",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 4,
        name: "DevOps",

        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 5,
        name: "Data Science",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 6,
        name: "Marketing",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 7,
        name: "Business",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 8,
        name: "Sales",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 9,
        name: "Customer Support",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 10,
        name: "Finance",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 11,
        name: "Human Resources",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 12,
        name: "Product",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 13,
        name: "Other",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    }
]

export const skills: SkillModel[] = [
    {
        id: 1,
        name: "PHP",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 2,
        name: "Laravel",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 3,
        name: "React",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 4,
        name: "Node.js",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 5,
        name: "MongoDB",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 6,
        name: "MySQL",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 7,
        name: "JavaScript",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 8,
        name: "Python",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
    },
    {
        id: 9,
        name: "Java",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-29T00:00:00.000000Z",
    },
    {
        id: 10,
        name: "C++",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-01T00:00:00.000000Z",
    },
    {
        id: 11,
        name: "C#",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-02T00:00:00.000000Z",
    },
    {
        id: 12,
        name: "C",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-03T00:00:00.000000Z",
    },
    {
        id: 13,
        name: "GoLang",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-04T00:00:00.000000Z",
    },
    {
        id: 14,
        name: "Ruby",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-05T00:00:00.000000Z",
    },
    {
        id: 15,
        name: "Swift",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-06T00:00:00.000000Z",
    },
    {
        id: 16,
        name: "Kotlin",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-07T00:00:00.000000Z",
    },
    {
        id: 17,
        name: "Scala",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-08T00:00:00.000000Z",
    },
    {
        id: 18,
        name: "Customer Support",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-09T00:00:00.000000Z",
    },
    {
        id: 19,
        name: "Marketing",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-10T00:00:00.000000Z",
    },
    {
        id: 20,
        name: "Sales",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-11T00:00:00.000000Z",
    },
    {
        id: 21,
        name: "Design",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-12T00:00:00.000000Z",
    },
    {
        id: 22,
        name: "DevOps",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-13T00:00:00.000000Z",
    },
    {
        id: 23,
        name: "Project Management",
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-09-14T00:00:00.000000Z",
    }
]

function randCompany() {
    return companies[randInt(0, companies.length - 1)]
}

function randSkills(count = randInt(1, 4)) {
    let arr = []

    while (arr.length < count) {
        const index = randInt(0, skills.length - 1)

        if (!arr.includes(skills[index])) {
            arr.push(skills[index])
        }
    }

    return arr
}

function randCategories(count = randInt(1, 3)) {
    let arr = []

    while (arr.length < count) {
        const index = randInt(0, categories.length - 1)

        if (!arr.includes(categories[index])) {
            arr.push(categories[index])
        }
    }

    return arr
}

export const jobs = [
    {
        id: 1,
        title: "Fullstack Developer",
        description: "A remote fullstack developer position with a focus on both frontend and backend technologies.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-08-28T00:00:00.000000Z",
        updatedAt: "2021-08-28T00:00:00.000000Z",
        new: true,
        remote: true,
        salary: 1000,
        skills: randSkills(),
    },
    {
        id: 2,
        title: "Data Scientist",
        description: "Join our team as a data scientist and work on cutting-edge machine learning projects.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-09-05T00:00:00.000000Z",
        updatedAt: "2021-09-05T00:00:00.000000Z",
        new: false,
        remote: false,
        salary: 1200,
        skills: randSkills(),
    },
    {
        id: 3,
        title: "UX/UI Designer",
        description: "We're looking for a creative and talented UX/UI designer to join our design team.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-09-12T00:00:00.000000Z",
        updatedAt: "2021-09-12T00:00:00.000000Z",
        new: true,
        remote: false,
        salary: 900,
        skills: randSkills(),
    },
    {
        id: 4,
        title: "Frontend Developer",
        description: "Join our team as a frontend developer and contribute to the development of user-friendly interfaces.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-09-18T00:00:00.000000Z",
        updatedAt: "2021-09-18T00:00:00.000000Z",
        new: false,
        remote: true,
        salary: 1100,
        skills: randSkills(),
    },
    {
        id: 5,
        title: "Marketing Specialist",
        description: "We're seeking a marketing specialist to develop and execute effective marketing strategies.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-09-25T00:00:00.000000Z",
        updatedAt: "2021-09-25T00:00:00.000000Z",
        new: true,
        remote: false,
        salary: 950,
        skills: randSkills(),
    },
    {
        id: 6,
        title: "Software Engineer",
        description: "Join our software engineering team and contribute to the development of innovative software solutions.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-10-02T00:00:00.000000Z",
        updatedAt: "2021-10-02T00:00:00.000000Z",
        new: false,
        remote: false,
        salary: 1300,
        skills: randSkills(),
    },
    {
        id: 7,
        title: "Project Manager",
        description: "We're hiring a project manager to oversee and coordinate various projects within our organization.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-10-09T00:00:00.000000Z",
        updatedAt: "2021-10-09T00:00:00.000000Z",
        new: true,
        remote: false,
        salary: 1200,
        skills: randSkills(),
    },
    {
        id: 8,
        title: "Network Administrator",
        description: "Join our IT team as a network administrator and ensure the smooth operation of our network infrastructure.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-10-16T00:00:00.000000Z",
        updatedAt: "2021-10-16T00:00:00.000000Z",
        new: false,
        remote: true,
        salary: 1100,
        skills: randSkills(),
    },
    {
        id: 9,
        title: "Graphic Designer",
        description: "We're looking for a talented graphic designer to create visually appealing designs for our brand.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-10-23T00:00:00.000000Z",
        updatedAt: "2021-10-23T00:00:00.000000Z",
        new: true,
        remote: false,
        salary: 950,
        skills: randSkills(),
    },
    {
        id: 10,
        title: "Mobile App Developer",
        description: "Join our mobile app development team and contribute to the creation of innovative and user-friendly mobile applications.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-10-30T00:00:00.000000Z",
        updatedAt: "2021-10-30T00:00:00.000000Z",
        new: false,
        remote: true,
        salary: 1200,
        skills: randSkills(),
    },
    {
        id: 11,
        title: "Financial Analyst",
        description: "We're hiring a financial analyst to analyze financial data and provide insights to support decision-making.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-11-06T00:00:00.000000Z",
        updatedAt: "2021-11-06T00:00:00.000000Z",
        new: true,
        remote: false,
        salary: 1100,
        skills: randSkills(),
    },
    {
        id: 12,
        title: "Customer Support Specialist",
        description: "Join our customer support team and assist customers with inquiries, issues, and product information.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-11-13T00:00:00.000000Z",
        updatedAt: "2021-11-13T00:00:00.000000Z",
        new: false,
        remote: false,
        parTime: true,
        salary: 900,
        skills: randSkills(),
    },
    {
        id: 13,
        title: "Human Resources Specialist",
        description: "We're seeking a human resources specialist to manage various HR functions and support our team members.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-11-20T00:00:00.000000Z",
        updatedAt: "2021-11-20T00:00:00.000000Z",
        new: true,
        remote: true,
        featured: true,
        salary: 1000,
        skills: randSkills(),
    },
    {
        id: 14,
        title: "Content Writer",
        description: "We're looking for a creative content writer to produce engaging and informative content for our audience.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-11-27T00:00:00.000000Z",
        updatedAt: "2021-11-27T00:00:00.000000Z",
        new: false,
        remote: false,
        parTime: true,
        salary: 950,
        skills: randSkills(),
    },
    {
        id: 15,
        title: "Network Security Analyst",
        description: "Join our cybersecurity team as a network security analyst and help protect our organization from cyber threats.",
        active: true,
        company: randCompany(),
        categories: randCategories(),
        createdAt: "2021-12-04T00:00:00.000000Z",
        updatedAt: "2021-12-04T00:00:00.000000Z",
        fullTime: true,
        new: true,
        remote: true,
        salary: 1100,
        skills: randSkills(),
    },
];

export const user: UserModel = {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    experience: "I'm a full-stack web developer with 5 years of experience.",
    phone: "+1 234 567 890",
    profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.",
    createdAt: "2021-09-25T00:00:00.000000Z",
    updatedAt: "2021-09-25T00:00:00.000000Z",
    avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80",
    coverImage: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

export {usePhotoGallery} from './usePhotoGallery';
export {useUser} from './useUser';
