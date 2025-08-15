import { getQuestionById } from '@/lib/dsa';
import { QuestionSolver } from '@/components/dsa/QuestionSolver';
import { notFound } from 'next/navigation';
import { Header } from '@/components/dsa/Header';

interface PageProps {
    params: {
        id: string;
    }
}

export default function QuestionPage({ params }: PageProps) {
    const question = getQuestionById(params.id);

    if (!question) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="container py-8">
                <QuestionSolver question={question} />
            </main>
        </>
    );
}
