import { NextResponse } from 'next/server';
import firebaseService from '../../../lib/firebaseService';

export async function GET() {
  try {
    const result = await firebaseService.getDataOnce('projects');
    if (result.success) {
      return NextResponse.json(result.data);
    } else {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const result = await firebaseService.saveData('projects', data);
    if (result.success) {
      return NextResponse.json({ message: 'Projects updated successfully' });
    } else {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { index, ...updateData } = await request.json();
    
    // Get current projects
    const currentResult = await firebaseService.getDataOnce('projects');
    if (!currentResult.success) {
      return NextResponse.json({ error: currentResult.error }, { status: 500 });
    }

    const updatedProjects = [...currentResult.data];
    updatedProjects[index] = { ...updatedProjects[index], ...updateData };

    const result = await firebaseService.saveData('projects', updatedProjects);
    if (result.success) {
      return NextResponse.json({ message: 'Project updated successfully' });
    } else {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
