const employees = [
    {
        id: 1,
        name: 'John Doe',
        position: 'Director',
    },
    {
        id: 2,
        name: 'Jane Doe',
        position: 'Managing Director',
    }
]

export async function GET(request) {

    return Response.json(employees);
}

export async function POST(request) {
}

export async function PUT(request) {
}
