import type { TrainingPath } from '../data/siteContent'

interface TrainingCardProps {
  course: TrainingPath
  number: string
}

export function TrainingCard({ course, number }: TrainingCardProps) {
  return (
    <article className="training-card">
      <p className="training-card__number">PATH {number}</p>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <ul aria-label={`${course.title} focus areas`}>
        {course.focusAreas.map((focusArea) => (
          <li key={focusArea}>{focusArea}</li>
        ))}
      </ul>
    </article>
  )
}
